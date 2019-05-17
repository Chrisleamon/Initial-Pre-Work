# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

A request is sent out for the webpage by running through a set protocol and several connections. First a server is like a desktop computer with a massive storage space and error correcting ram, and the server is always on and always connected. Currently there are tens of thousands of servers on the internet. The Techtonic website is sitting on a server along with several other dozen websites on the same server. This server uses various methods; DSL, fiber or cell phone towers, to connect to a major data point, namely a large satellite dish. The data is transmitted back and forth through a series of satellites orbiting earth to create a global mesh network. Mesh meaning that the major datapoint connects to its satellite, then that satellite connects to every other satellite, and every other satellite is connecting to all other satellites at the same time. Where the large satellite dish connects through the satellites to every other major datapoint around the planet. All servers, computers, tablets, cellphones and various other devices use this to connect to each other all around the world. Most devices are connected using the TCP/IP (Transmission Control Protocol/Internet Protocol), this is a large series of steps and protocols that ensure fast and secure data transfer. 
So, your device that already has an internet connection sends a request out using the internet protocol for https://www.techtonic.com. Whatever connection you are using it is sent out to the giant satellite dish then it is transmitted to its satellite in space. The request bounces around until it finds a major data point on the ground that matches the website and establishes the connection. Then your device through your direct connection to your local giant satellite dish, one to a dozen satellites, the other giant satellite dish on the ground and the DSL fiber or signal connection to the server; your device and the server somewhere else in the world start exchanging information back and forth allowing you to do whatever you need to do on the website. This all happens in a fraction of a second.



## From start to finish, how does data reach you to be rendered in the browser?

Your internet connection allows you to send and receive data on the web. TCP/IP (Transmission Control Protocol and Internet Protocol) are communication protocols that define how data should travel across the web. The browser goes to the DNS server, and finds the real address of the server that the website is on. DNS (Domain Name Servers) are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website is on, so it can send HTTP (Hypertext Transfer Protocol) messages to the right place. The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP. When the server approves the client's request, the server sends the client a "200 OK" message, which means it gives permission to look at the website and then starts sending the website's files to the browser as a series of small chunks called data packets. A website is made up of many different files, which are like the different parts of car or parts of a recipe. The browser assembles the small chunks into a complete website and displays it to you.

## What code is rendered in the browser?

HTML (Hypertext Markup Language) is always used for every webpage to display content and CSS (Cascading Style Sheet) is used in a small to a large degree to style the page and the content. JavaScript has long been the most popular for controlling how the web page acts, controls security and user input. But much of the same thing can be done with Java and C#. PHP, Flash and Ruby on Rails can also deliver content in a window that was made with HTML.

## What is the server-side code’s main function?

The server-side codes main function is to first guard the data and make sure there's no unauthorized access and no corruption. Its other job is to make sure that only the correct and authorized information is sent out. 

## What is the client-side code’s main function?

The first function of the client-side code is displaying the information in an easy to read and attractive manner. The codes second function is to send the client-side input into the server and to make sure that only the correct kind of input is sent.

## What is runtime?

Runtime is the amount of time that a program is up and running. This does not include start up time, shut down time or the time it needs performing updates.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

In normal use the client would have only one instance of the website created. The client side can have multiple instances and can have as many instances that are available due to the amount of memory in the machine.

## How many instances of the server-side code are available at any given time?

Multiple instances, which depends on the limitations built into the program, the amount of resources allocated on the domain and the resources of the server itself; are regular operation for servers. Some programs can go as high as millions at one time, like your favorite shopping service or your favorite online game.

## How many instances of the databases connected to the server application are created?

Multiple instance of the server’s whole database can be created but this should be avoided, and most programs have something in place to prevent this from happening. By doing so creates the risk that any changes to the database would be multiplied or not happen at all. Plus, there is also the fact that doing so would eat up a lot of memory and a lot of time as well. Several programs open many small instances from the data base, this can happen due to how data bases are built and organized. Where one section is broken off into many smaller sections then those are broken up again and again. So many people then can make changes to the data base with out causing any problems and keeping it all correct.
