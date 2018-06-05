'use strict';
var xModelPopup = function(options) {
    var xModelOptions = {
        id: '',
        css: {
            overlay_opacity: 0,
            overlay_color: '',
            z_index: 10000,
            border: '',
            border_radius: '4px',
            padding: '10px',
            background_color: '',
            shadow: '',
            top: false,
            left: false,
            width: false,
            height: false
        },
        classes: {
            overlay: '',
            container: '',
            header: '',
            body: '',
            footer: '',
            close: 'close'
        },
        content: {
            header: '',
            body: '',
            footer: ''
        }
    };
    this.modelOptions = Object.assign(xModelOptions, options);
    this.modelOptions.id = "x-model" + document.getElementsByClassName('x-model').length + 1;
}
xModelPopup.prototype.init = function() {
    var $this = this;
    var options = this.modelOptions;
    var css = options.css;

    var xModelDiv = document.createElement("div");
    xModelDiv.setAttribute("class", "x-model");
    xModelDiv.setAttribute("id", options.id);
    xModelDiv.setAttribute("style", "display: none;");
    var xModelContainerDiv = document.createElement("div");
    xModelContainerDiv.setAttribute("class", 'x-model-container ' + options.classes.container);
    xModelContainerDiv.style.position = 'fixed';
    xModelContainerDiv.style.zIndex = css.z_index ? css.z_index : 10000;
    xModelContainerDiv.style.border = css.border ? css.border : '2px solid #fff';
    xModelContainerDiv.style.borderRadius = css.border_radius ? css.border_radius : '4px';
    xModelContainerDiv.style.backgroundColor = css.background_color ? css.background_color : '#fff';
    xModelContainerDiv.style.padding = css.padding ? css.padding : '10px';
    xModelContainerDiv.style.webkitBoxShadow = css.shadow ? css.shadow : '0px 0px 5px 0px rgba(0,0,0,0.75)';
    xModelContainerDiv.style.mozBoxShadow = css.shadow ? css.shadow : '0px 0px 5px 0px rgba(0,0,0,0.75)';
    xModelContainerDiv.style.boxShadow = css.shadow ? css.shadow : '0px 0px 5px 0px rgba(0,0,0,0.75)';
    if(this.modelOptions.css.width) {
        xModelContainerDiv.style.width = this.modelOptions.css.width;
    }
    if(this.modelOptions.css.height) {
        xModelContainerDiv.style.height = this.modelOptions.css.height;
    }

    var xModelHeaderDiv = document.createElement("div");
    xModelHeaderDiv.setAttribute("class", 'x-model-header ' + options.classes.header);
    xModelHeaderDiv.innerHTML = options.content.header;

    var xModelBodyDiv = document.createElement("div");
    xModelBodyDiv.setAttribute("class", 'x-model-body ' + options.classes.body);
    xModelBodyDiv.innerHTML = options.content.body;

    var xModelFooterDiv = document.createElement("div");
    xModelFooterDiv.setAttribute("class", 'x-model-footer ' + options.classes.footer);
    xModelFooterDiv.innerHTML = options.content.footer;

    xModelContainerDiv.append(xModelHeaderDiv);
    xModelContainerDiv.append(xModelBodyDiv);
    xModelContainerDiv.append(xModelFooterDiv);

    var xModeloverlayDiv = document.createElement("div");
    xModeloverlayDiv.setAttribute("class", 'x-model-overlay ' + options.classes.overlay);
    xModeloverlayDiv.style.position = 'fixed';
    xModeloverlayDiv.style.width = '100%';
    xModeloverlayDiv.style.height = '100%';
    xModeloverlayDiv.style.backgroundColor = css.overlay_color ? css.overlay_color : 'rgba(96, 125, 139, 0.46)';
    xModeloverlayDiv.style.left = 0;
    xModeloverlayDiv.style.top = 0;
    xModeloverlayDiv.style.opacity = css.overlay_opacity;
    xModelDiv.append(xModelContainerDiv);
    xModelDiv.append(xModeloverlayDiv);
    document.getElementsByTagName("body")[0].append(xModelDiv);

    var closeElements = document.getElementById(options.id).getElementsByClassName(options.classes.close);
    if (closeElements.length) {
        for (var i = closeElements.length - 1; i >= 0; i--) {
            closeElements[i].addEventListener("click", function(e) {
                $this.close();
            });
        };
    }
}
xModelPopup.prototype.position = function() {
    var body = document.getElementsByTagName('body')[0];
    var bodyOffset = {
        w: body.offsetWidth,
        h: body.offsetHeight
    };
    var model = document.getElementById(this.modelOptions.id).getElementsByClassName('x-model-container ')[0];

    var modelOffset = {
        w: model.offsetWidth,
        h: model.offsetHeight
    };
    var top = (bodyOffset.h - modelOffset.h) / 2;
    var left = (bodyOffset.w - modelOffset.w) / 2;
   
    model.style.top = !this.modelOptions.css.top ? ( top > 0  ? top+'px' : '10px') : this.modelOptions.css.top;
    model.style.left = !this.modelOptions.css.left ? left+'px' : this.modelOptions.css.left;    
}
xModelPopup.prototype.open = function() {
    document.getElementById(this.modelOptions.id).setAttribute('style', 'display: block');
    this.position();
}
xModelPopup.prototype.close = function() {
    document.getElementById(this.modelOptions.id).style.display = 'none';
}