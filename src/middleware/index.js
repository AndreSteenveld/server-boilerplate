
import error from "feathers-errors/handler";

export default function middleware( ){

	//
	// This function will be run in the context of the application. To add more
	// middleware use the generator to create a stub and add them here. For more
	// information about middleware goto: http://docs.feathersjs.com/middleware/readme.html
	//

	this.use( error( ) );

}
