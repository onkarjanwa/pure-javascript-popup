pure-javascript-popup
=========================
XModelPopup is a pure Javascript popup class. It is written in pure javascript becuase it should be able to use with any other js library without any dependancy.

# How to use
Include js library x_model_popup.js in your page. It can be included in header or footer, but it should be included before initialization of popup.

```
<script type="text/javascript" src="x_model_popup.js"></script>
```

## 1. Initialize popup object

```
var options = {
     content: {
        header: '<span>Hello World</span><button class="close">Close me</div>',
        body: 'body',
        footer: 'footer'
    }
};
var model = new xModelPopup(options);
model.init();
model.open();
```
## 2. Custom css class
Custom classes can be used for overlay, container, header section, body section and footer section of the popup. Also custom class can be used for close button. Bydefault "close" is used as close button class.

```
var classes = {
    overlay: '',
    container: '',
    header: '',
    body: '',
    footer: '',
    close: ''
};
options.classes = classes;
```
## 3. Custom css
We have provided few custom css options for popup design.
```
var css = {
    overlay_opacity: 0,
    overlay_color: '',
    z_index: 10000,
    border: '',
    border_radius: '',
    padding: '',
    background_color: '',
    shadow: '',
    top: false,
    left: false,
    width: false,
    height: false
};
options.css = css;
```

## 4. Close button
It does not require to bind any event to close button, just provide close button class in "option.classes.close", it will automatically bind the close event.
