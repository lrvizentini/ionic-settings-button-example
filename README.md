# ionic-settings-button-example
Example of how implement a setting button using Ionic framework

### Usage

#### using the acions property

```
<ion-nav-buttons side="right">
    <btn-settings 
        actions="actions" 
        buttom-class="button-assertive" 
        buttom-active-class="button-energized" 
        no-border="true" 
        icon=""
        icon-active="ion-android-arrow-dropup" 
        item-class="dark-bg light" 
        on-click="fn1(isopened)">
    </btn-settings>
</ion-nav-buttons>
```

#### using transclude

```
<div class="bar bar-subheader">
    <h2 class="title">Sub Header</h2>
    <btn-settings>
        <div class="list">
            <div class="item dark-bg light" ng-click="fn1(-1)">Menu 1</div>
            <a class="item dark-bg light" href="#/tab/chats">Chats</a>
            <a class="item dark-bg light" href="#/tab/account">Account</a>
        </div>
    </btn-settings>
</div>
```

## Definitions

## actions
Actions menu array. Is an object define as
 * **text**: `string` Title of the menu
 * **fn**: `function(...)=>void` OnClick function
 * **value**: `any` Value passed as parameter of the function
 * **disabled**: `boolean` Show or not the button
## buttom-class
 * **type**: `string` class of the settings button
 
## buttom-active-class
 * **type**: `string` acive class of the settings button
## no-border
* **type**: `boolean` determine when show or not the menu item

## icon
 * **type**: `string` icon class name of the settings menu

## icon-active
 * **type** `string`  active icon class name of the settings menu

## item-class
 * **type** `string` class use in the menu items, only use when using the actions property

## on-click
 * **type** `function(isopened:boolean) => void`  function triggered when click the settings button

![alt tag](https://raw.githubusercontent.com/lrvizentini/ionic-settings-button-example/master/screens/image1.png)
![alt tag](https://raw.githubusercontent.com/lrvizentini/ionic-settings-button-example/master/screens/image2.png)
![alt tag](https://raw.githubusercontent.com/lrvizentini/ionic-settings-button-example/master/screens/image3.png)
</div> 
<h1>Enjoy and contribute</h1>
