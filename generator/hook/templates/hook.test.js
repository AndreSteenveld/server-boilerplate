import { assert } from "chai";
import hook from "../../../../<%= hookPath %>";

describe( "<%= typeof service === 'string' ? service : 'Global' %> <%= codeName %> hook ::", function( ){

	it( "is a function", function( ){

		const handler = hook( );
		assert.isFunction( handler, "The hook handler is not a function" );

	});

	it( "doesn't throw on use", function( ){

		const handler = hook( );

		let mock = {
			// The method name (get, find, create, update, patch, remove, all)
			method: "",

			// The hook type (before or after)
			type: "<%= type === 'before' ? 'before' : 'after' %>",

			// The service call result data, in case of a before the result can be set to skipp all other hooks and middleware
			//result: null,

			// The original callback (can be replaced but shouldn't be called in your hook)
			callback: ( error, data, next ) => { },

			// The service method parameters
			params: [ ],

			// The request data (for create, update and patch)
			data: { },

			// The app object
			app: { },

			// The id (for get, remove, update and patch)
			id: null
		};

		assert.doesNotThrow( ( ) => handler( mock ), Error );

	});

});
