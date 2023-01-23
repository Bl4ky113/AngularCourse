# Angular for Begginers

This is the First and the Corner Stone Of the Angular Courses, although, this one is free. 
The others wont, so I have to squeeze this course.

Start: 01/19/2023
End:

Sessions:
- 01/19/2023
- 01/20/2023

## SetUp

The General Setup is 
- NodeJS
- IDE

In NodeJS download:

@angular/cli

So we can use the ng cli to create a new project:

ng new "project"

After installing the Project we can open its folder in out IDE, and 
then run our Hello World by just starting the Server with:

$ npm start // On the project folder

Then we access it on localhost:4200 on our Browser

Whenever we change the Files of the Project, the server will autoreload and recompile.
So it shows the newest changes.

## Custom HTML Elements, Model vs View

This Model vs View system works just like Django Templates system, exporting the elements
outside the template itself, into diferent components which have their own html custom tag.
And from there you can add different stuff such as styles, another html template.

This is made via Components, which are just a way to encapsulate a part of the web page into a 
html element, and from there add stuff, such as templates, and others.
We can pass data to the template by adding a property to an exporting class of the component.
Accessing the data with {{ variable }} on the template.

## Why Angular? Some of its features

We can create some input properties in our html tags on the template, so we can pass data such like 
using {{  }} from our component data. For the inputs we only have to put the property in a braket and
then just pass the variable to the property. Something like this:

\<tag [input-property]="data.variable"\>

We can make event listeners to the tags as well, by just adding the event to the tag 
properties in parentesis and then especify the method or function that it will trow whenever the event happens
We have to create the callback function in the same exporting class as the data object. 

\<tag (event)="onEvent()" \>

We can also give to the Tags and Elements an sort of name or ID, so we can reference its values and
properties in the template, even combining with others features.

\<tag #tag_name [value]="tag_name.property" (event)="onEvent(tag_name.value)"\>

We can also combine these functions and features. To change some of the data values, 
the best thing is that if, they are shown in the web page. Angular will update them securely, avoiding any 
JS injection and bad stuff in general.

## First Component

In order to create a Component we will have to use the cli, and execute:

$ ng generate component "component_name"

This will create a folder with the component files in our src/app folder
A html, ts, css and other ts file. Which will have the same structure as the app component that we 
have already saw and tested. 

With this new component, we can pretty much do the same thing, but we can add them to our main or root component.
by just adding to the template the custom html tag. Which will show in the final html document. 
The name of the Html tag is on the component decorator variables.

So a way to get inputs to a custom component is just to add an [input-property] on the component tag, 
then in the class of the Component, we use the decorator @Input(), we can change the name of the 
input by passing the template input name as a parameter and then changing it's name.

There's a lot of problems with TS, so somehow I got throught it by just adding a ! to the end
of the variable. But heck, Now I have to learn TS top to bottom.
Then we can use the Inputs in the template just like any other variable.

We can also create some sort of output? This was just poorly explained, 
but its porpuse is to redirect an Event Trigger sending some data? 
This by creating a event listener in a element, then, if we need the data outside the 
component that we are working on, we have to create an extra event to pass the data 
through a function. 

Okay, Reading the Docs, they are better explained, so to send data from a child component to 
a parent component. We are going to use events to send the data, 
so first we create a new event in our component, where we set the type of the data to send, and the 
name of the event.

Then we create a method where, using the event, we emit() the data as a parameter.

Then in the template, we create a element which has an event lister. And we trow the created method 
in the component. Sending as a parameter the data which we are going to send.

That's for the Child Element, In the Parent Element we need to:
create a new method which recieves the data as a parameter. 
Then in the template in the child component we add a new event listener to the event that we created
in the child component, and the handler method the one which we wrote in the parent component, and 
in the method we send as a parameter $event, so it can catch the event data.

## Simple Estructural Directives 

Are a way to cahnge the themplate content using JS or TS code embeded in the template, so we can 
make a little less DRY templates, we generally use them as 
attributes in a tag, using different structures such as:

### \*ngFor
This atribute takes the syntax of a simple for loop, generaly of an array or object.
And we can even add some extra syntax to our for loop, like using the index value while 
looping an array or object.

\*ngFor="let value in array; index as i"

This will make that the tag that has the for loop, will repeat for each value in the array.

Other extras are:
- first, true if the element is the first on the list
- last, ... is the last ...
- even
- odd, you are not gonna belive it.

A way to use the first and generall boolean data, is to add an input where we send class.css_class_name. So if the 
value that we send is true, it adds the css class to the element.

[class.css_name]="value_that_can_be_true"

### \*ngIf
Pretty simple, it uses the syntax of a simple if. If it is true, it shows the element. If it doesn't, it doesn't.
We can use it to show some specific data, or try to see if some of the data is available, via a function that 
checks it, or a simple if value. 
But checking every single value can be frustating. So we can add an operator to our variables in order
to check if they exist, and if not, just show a None element, by just using ? next to the variable.


[input_example]="value?"
{{ value?.value_property }}

Then, we can even use the else statement, inside the attribute value, in order to show or do something.
By using else, we could give and element a custom id. and then show it using the else statement.

\<tag1 *ngIf="if value; else customId" \>
\<tag2 #customId\>


