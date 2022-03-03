// Section 10👉 Document Object model in JavaScript


// 1️⃣ Window is the main container or we can say the  global Object and any operations related to entire  browser window can be a part of window object. 


// For ex 👉 the history or to find the url etc.

// window.history
// window.localStorage
// window.location

// 1️⃣ whereas the DOM is the child of Window Object

// 2️⃣ All the members like objects, methods or properties.  If they are the part of window object then we do not refer the window object.  Since window is the global object  so you do not have to write down window.  - it will be figured out by the runtime.



// For example
// 👉 window.screen or just screen is a small information 
// object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM



// 2️⃣ Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()


// 3️⃣ Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight,  innerWidth 


// ************** DOM vs BOM ********************************

// 👉 The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, e.g. document and all traversal you would do in it, events, etc.

// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components  aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR In simple meaning all the Window operations which comes under BOM are performed usign BOM 

// alert(location.href)
// if (confirm('yess')){
//     location.href= "google.com"
// }

// ***************************************************************************

// Section 3️⃣: Navigate through the DOM 

 // 1: document.documentElement
 // returns the Element that is the root element of thedocument. 

 // 2: document.head
 // 3: document.body


 // 4: document.body.childNodes (include tab,enter andwhiteSpace)  
 // list of the direct children only 
 // 5: document.children (without text nodes, only regularElements)

 // 6: document.childNodes.length     

 // How to check whether an element has child nodes or not? we will use document.body.hasChildNodes()  // => true / false


//  *******************************************************************************

// 👉 Practice Time 

// How to find the child in DOM tree 

// firstChild vs firstElementChild

// firstChild  =>  may return text
// FirstElementChild  => will return html tags

// lastChild vs lastElementChild 
// => same as above but from bottom to top


// const data = document.body.firstElementChild;
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// ********************************

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// document.body.parentNode; // the <html> element
// document.body.parentElement; // the <html> element

// document.documentElement.parentNode; // the document node
// document.documentElement.parentElement; // null

// (document.documentElement.parentNode === document);  // true
// (document.documentElement.parentElement === document);  //false

// *************************************************

// 👉 How to find or access the siblings

// document.body.nextSibling  // => (text) or return next sibling

// document.body.nextElementSibling  // => return next siblingelement

// document.body.previousSibling
// document.body.previousElementSibling

// **********************************************************************

//SECTION 4️⃣:  How to search the Elements and the References 

// document.getElementById('idname')
// document.getElementsByClassName('classname')
// document.getElementsByName('name attribute in form')
// document.getElementsByTagName('tagname')
// document.getRootNode()   // => return document
// document.querySelector('.container')   //=> will select only one element having container class

// document.querySelectorAll('.container')  // =>  will select ALL element having container class