# Angular for Begginers

This is the First and the Corner Stone Of the Angular Courses, although, this one is free. 
The others wont, so I have to squeeze this course.

Start Course: 01/19/2023
End Course: 01/24/2024

Start Routing: 01/25/2023
End Routing: 01/25/2023

Start Forms: 02/02/2023
End Forms: 

Sessions Course:
- 01/19/2023
- 01/20/2023
- 01/21/2023
- 01/23/2023
- 01/24/2023

Sessions Routing:
- 01/25/2023

Sessions Froms:
- 02/02/2023
- 02/05/2023

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

I had some problems while trying to run the server, mainly, that i didn't have the typesript inplementation of 
nodejs, so:

$ sudo pacman -Syu ts-node

Now, the server tries to start, but fails because of something.

Yeah, I preffer using another API, so I can focus on learning this thing and not fixing a broken project.
I'll be using swapi. A Starwars API.

## Http Client in Angular

We can create different services in Angular, one of which is creating a http conection to an backend server,
so we can fetch data from the server.

But as allways, the course explanation was awfull. So lets check the docs.

So, in order to use http request, we have to go app.module.js
and from @angular/common/http import HttpClientModule, add it to imports array in @NgModule object.
It must be after BrowserModule.

Then from common/http in our component we import HttpClient and from core we import OnInit. So 
we can, from the startup, test and use the http request of our data.

for use OnInit, we add to the component class: implement OnInit, 
using the constructor of the class, in the parameters we create an attribute for the HttpClient,
so in ngOnInit() we can use the HttpClient from the context "this".

From there, we can use that variable to do the http requests.

We can use get() method, it takes, the url string, and options for the request.
Which we can make using HttpParams, which we need to import from common/http

So we have the Client set up, and can do Gets to and API. But we still need to do 
something with the response, so we need to subscribe() to it, 
subscribe just takes a function that gets request data, from there we can use it.
Get can store it in a variable by declaring it first in the component class, and then 
assign it in the parameter function.

## Async Http Requests in Angular

We can create async Request, we need to import Observable from 'rxjs'.
Then, we need to create a variable in our component class, but we need to do 
it observable by adding a $ in the end of the name? Then make it a Observable type
variable, and the type of value that will take in \<\>

Then when using the http request, we can assign it to the variable, also we could 
add the type of the request by adding \<\> just before the function's parenthsis.

But only with that, It wouldn't get anything, we need to subscribe to it. But we have to do it in 
the template.
We do this by just adding a pipe to the observable variable that we created, async, so 
the data will show whenever it loads. We can add it to regular pipelines, but only in the beggining.
And we can use it in for loops, or if statements, if we need to hide the data before it loads.

## Custom Injectable Services

Injectable Services are a way to integrate a system or service only once in the app,
so it doesn't repeat, and stays more flexible while developing the project.

We create one by using:

ng generate service services/"serviceName"

Then, it will generate the service files in the services folder on src/app. 
From there, we can create a injectable serivce, mainly in the name.service.ts file.

And we can inject or add it to an component just like the Http Module, on the constructor, we
add as a parameter a private variable of the service injected

  contructor (..., private foo: serviceName) { ... }

We can move or create all kind of methods with these services, 
remember, that we can set the type of the value to return by adding
: and the type of value after the function arguments and before the brackets.

### Put Request and Http Headers

The final class will be about this, well.

We can send with the Http Service a put request, where we pass the url of the API, 
the value to send and the headers of the request.

For the headers we have to create a new HttpHeaders variable where we define our custom headers with the method
set, passing the title and its value.

But not gonna lie, that Deep Dive Course Looks Pretty Fine.

# Routing

Routing is a way that we can get more than one single page per app, so we can 
have multiple views in order to do stuff in general. But we are going to do a SPA with 
routing.

We need to create one project from the begging in order to use Routing, 
because the design of the app will more diferent than a normal one page app.

From there, we can create our own components, and stuff.

But if need to use the routing, we need to add it to app.module in the import list.
There as well, we will add the components that will have the routing. 
By passing an array of Objects with the path of the route, and the component. To the method
forRoot

Then in the root app template, we don't have to use the element of the apps, but we use 

\<router-outlet\>

From there, if we enter local host and into our routes, the components will load acordingly their 
routes. We can make diferent way to access this routes, links or we can use the routerLink="", to send
our route.

We can also use our routes to pass parameters, so we can use them on the routing.
We declate them by just adding route/:variable to our route. And we can send them 
by using [routerLink]="[route, variable]" as an input attribute and sending the data 
as an array.

We can also add to the elements that have the routerlink attribute, a routerLinkActive, which adds to 
the element a css-class so it can have a different style.

But for getting the attribute on the route, we have to import the router service, the active route service and 
use a switchmap, so we can use ParamMap to get the route attribute.

# Froms

## What are Forms in Angular

Forms are a way that we, as developers, can catch and get input or data from the user. There's two types of 
forms. Reactive and Template Driven. Each functions differently than the other.

Reactive forms are the standard froms which take the data and pass it to the angular client side, then to 
the server, or whatever you need them to do. They are more reliable, and usable, testable, and all
because they are just regular forms.

Template Driven, are only design and created on the template, but they are asyncronous, can mutate, and 
general flexiblity between the template boundries. 

## Making a Form

We can set Reactive or TB forms with the same base classes, what changes its the way we use them.
The base classes are genrealy just a tacker for one or more forms, even custom elements outside the form.
Some of them are:
- FormControl: one value or form control
- ...Group: collection of ...
- ...Array: Array of ...
- ControlValueAccessor: Bridge between an FormControl and DOM elements.

For a reactive Form, we just can add them as an input to the form input of our html template
making a direct conection between them.

template:
\<input [formControl]="formValueName"\>
ts file:
formValueName = new FormControl('');

For a TB form, we use the directive ngModel and pass the variable name, that is going to take 
the form value indirectly

template:
\<input [(ngModel)]="formValueName"\>
ts file:
formValueName = "";

## Data Flows in a Form

As we have spoken, Reactive and TB Forms handle differently the way the get the data, but how
exactly? 

For Reactive Forms. The user inputs "blue" it isn't shown yet, the form sets an event, then the FormControl via
an observable called valueChanges, sets the value "blue". If we have subcribed to this 
observable, we can do something with the new value. Then its called the setValue method, to 
show to the user it's input. 

For TB Forms. The user inputs "blue", setting the value in the form with setValue, send then the new value
via an observable called valueChanges, the subscribers of valueChanges gets the new input, sends another event 
via viewToModelUpdate method which updates the initial formInput with the new input.

With this, we can see that TB forms shows the value, and then process it. 
With Reactive, it first reacts to or process it, and then shows it.

### Data Mutability
For the mutability of the forms, changing the value of the forms. 

TB forms only updates the value whenever the user has stoped inputing the 
new value, tracking only unique changes and not simple changes on the input.

For Reactive Forms, it updates every little change of the input.

