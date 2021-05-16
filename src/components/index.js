/** 
 * Component library.
 * Components are added here to make the imports in other parts easier, 
 * allowing webpack to check here first if they need to be removed from the bundle.
 * Don't use this method for containers.  
 * 
 **/
export { default as Jumbotron } from "./jumbotron"
export { default as Footer } from "./footer"