create new app
```
ng start
```
run in dev server
```
ng serve
```
generate components etc.
```
ng generate
```
Structural Directives, they change the DOM structure
```
+ngIf
```
Attribute Directives, do not change the DOM
```
ngStyle
```

You can create your own structural or attribute directives. 
Use services to (maintain state?) and handle common tasks throughout the app

use + to cast strings into numbers.
eg. 
str: string = '2';
num: number = +str;


create or use observables for async tasks. Use subjects when you want to also
manually trigger an observable event.
Observable/Subject: on observed change in the observable, then do something somewhere where it is subscribed... this event can happen any time.

Use pipes, and make your own pipes to format output in templates.
eg. {{mydata | uppercase | shorten:5 }}


Use Pipes for filters?? be aware of performance issues. another way to handle filters?


