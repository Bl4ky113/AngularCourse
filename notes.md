# Angular for Begginers

This is the First and the Corner Stone Of the Angular Courses, although, this one is free. 
The others wont, so I have to squeeze this course.

Start: 01/19/2023
End:

Sessions:
- 01/19/2023
- 01/20/2023
- 01/21/2023
- 01/23/2023

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

\<tag #tag\_name [value]="tag\_name.property" (event)="onEvent(tag\_name.value)"\>

We can also combine these functions and features. To change some of the data values, 
the best thing is that if, they are shown in the web page. Angular will update them securely, avoiding any 
JS injection and bad stuff in general.

## First Component

In order to create a Component we will have to use the cli, and execute:

$ ng generate component "component\_name"

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

A way to use the first and generall boolean data, is to add an input where we send class.css\_class_name. So if the 
value that we send is true, it adds the css class to the element.

[class.css\_name]="value_that_can_be_true"

### \*ngIf
Pretty simple, it uses the syntax of a simple if. If it is true, it shows the element. If it doesn't, it doesn't.
We can use it to show some specific data, or try to see if some of the data is available, via a function that 
checks it, or a simple if value. 
But checking every single value can be frustating. So we can add an operator to our variables in order
to check if they exist, and if not, just show a None element, by just using ? next to the variable.


[input\_example]="value?"
{{ value?.value\_property }}

Then, we can even use the else statement, inside the attribute value, in order to show or do something.
By using else, we could give and element a custom id. and then show it using the else statement.

\<tag1 \*ngIf="if value; else customId" \>
\<ng-template #customId\>

I've had an error, and the element can't be just any element, it has to be an ng-template element
so it works, otherwise it doesn't even compile.

### [ngClass]
Is an [] input type Directives which let us set different styles setting classes for elements.
We can send a string with the classes that the element will take, not recomended.
We can also send an array of strings with the classes that the element will take. 
Or even better an object which declares which classes and which not, deppending on the element,
and even more better, a function that returns the object, but which can use more logic deciding if 
the element should have the class. 

The best thing to do is returning Arrays or Strings, for performance sake.

### [ngStyle]
Is an Input type directive, which as the ngClass directive, can take a string or object to add some custom 
style to an object directly. We can do pretty much the same as the ngClass, 
but sending the css property and it's value.

A usefull trick should be using them for css properties that need some strange value, like urls. Or need
some sort of behaviour.

### [ngSwitch] and \*ngSwitchCase

These are an input and normal type directives, which just works like JS switch statement.
We just send the variable which will change to the [ngSwitch] input, and create different elements
where it needs to change using \*ngSwitchCases, and passing to those the value of the variable.

Even if we need to, we can use \*ngSwitchDefault, for default, you know

## Pipes

Pipes are a way that we can use to format some data, especially ugly data such as dates.
We are going to use them by adding just a pipe and then the formater, and it can take some
parameters or settings.

There's pipes for all types of data:
- strings
- numbers
- arrays
- dates

But they can also be used and combined with struturals directives, like for loops

\*ngFor=" obj | keyvalue "

Will create a list of objects with the key and value of the obj.

## Injectable Services Setup

We are just going to change the branch of our project, the angular tutorial repo, to 3-services.
So we can start from a little bit different web page, but with now an server API ready to send data,
we have to start it by just running in another terminal from our Angular Server:

$ npm run server
