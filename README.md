# ionic-settings-button-example
Example of how implement a setting button using Ionic framework

 <h4>Usage</h4>
 <p>using the acions property</p>
  <pre>&lt;ion-header-bar class="bar-stable" style="z-index:10"&gt;
    &lt;h1 class="title"&gt;Awesome App&lt;/h1&gt;
    &lt;btn-settings 
        actions="actions" 
        buttom-class="button-assertive"
        buttom-active-class="button-energized"
        no-border="true"
        icon=""
        icon-active="ion-android-arrow-dropup"
        item-class="dark-bg light"
        on-click="fn1(isopened)"&gt;
    &lt;/btn-settings&gt;
&lt;/ion-header-bar&gt;</pre>

<p>using transclude</p>
<pre>&lt;div class="bar bar-subheader"&gt;
    &lt;h2 class="title"&gt;Sub Header&lt;/h2&gt;
    &lt;btn-settings&gt;
        &lt;div class="list"&gt;
            &lt;div class="item dark-bg light" ng-click="fn1(-1)"&gt;Item 1&lt;/div&gt;
            &lt;a class="item dark-bg light" href="#/tab/chats"&gt;Chats&lt;/a&gt;
            &lt;a class="item dark-bg light" href="#/tab/account"&gt;Account&lt;/a&gt;
        &lt;/div&gt;
    &lt;/btn-settings&gt;
&lt;/div&gt;</pre>

<h4>Definitions</h4>

<div class="list">

<div class="item">
    <h1 class="title">actions</h1> action menu array
    <br />
    <br />
    <p>Definition:</p>
    <ul>
        <li><b>text</b>: string
            <p>Title of the menu</p>
        </li>
        <li><b>fn</b>: function(...)=>void
            <p>OnClick function</p>
        </li>
        <li><b>value</b>: any
            <p>Value passed as parameter of the function</p>
        </li>
        <li><b>disabled</b>: boolean
            <p>Show or not the button</p>
        </li>

    </ul>

</div>
<div class="item item-text-wrap">
    <h1>buttom-class</h1>
    <b>type</b>: string
    <br />
    <b>description</b>:class of the settings button
</div>
<div class="item item-text-wrap">
    <h1>buttom-active-class</h1>
    <b>type</b>: string
    <br />
    <b>description</b>:acive class of the settings button
</div>
<div class="item item-text-wrap">
    <h1>no-border</h1>
    <b>type</b>: boolean
    <br />
    <b>description</b>:determine when show or not the menu item
</div>
<div class="item item-text-wrap">
    <h1>icon</h1>
    <b>type</b>: string
    <br />
    <b>description</b>:icon class name of the settings menu
</div>
<div class="item item-text-wrap">
    <h1>icon-active</h1>
    <b>type</b>: string
    <br />
    <b>description</b>:active icon class name of the settings menu
</div>
<div class="item item-text-wrap">
    <h1>item-class</h1>
    <b>type</b>: string
    <br />
    <b>description</b>:class use in the menu items, only use when using the actions property
</div>
<div class="item item-text-wrap">
    <h1>on-click</h1>
    <b>type</b>: function(isopened:boolean) => void
    <br />
    <b>description</b>:function triggered when click the settings button
</div>
<div>
![alt tag](https://github.com/lrvizentini/ionic-settings-button-example/blob/master/screens/image1.png)
</div> 
<h1>Enjoy and contribute</h1>
