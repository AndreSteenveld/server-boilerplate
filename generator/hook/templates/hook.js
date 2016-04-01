
//
// <%= hookPath %>
//
// Use this hook to manipulate incoming or outgoing data. For more inforamtion
// about feather hooks goto: http://docs.feathersjs.com/hooks/readme.html
//

export default function hook({

	// Add your default parameters here, for example:
	// default_paramater = 1,
	// other = "more defaults"

} = { }){

	return function <%= codeName %>( hook /*, next */ ){

		const {
			method,   // The method name
			type,     // The hook type (before or after)
			result,   // The service call result data
			callback, // The original callback (can be replaced but shouldn't be called in your hook)
			params,   // The service method parameters
			data,     // The request data (for create, update and patch)
			app,      // The app object
			id        // The id (for get, remove, update and patch)
		} = hook;

		// next( error, hook );
		// return Promise( ( resolve, reject ) => { return hook; });

	};

};
