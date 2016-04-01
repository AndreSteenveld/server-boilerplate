
export default function middleware( application ){

	//
	// The contract here is that the middleware that is returned has to provide a .call( scope )
	// method. This means that something along the lines of the following example should work as
	// well.
	```
		class MyMiddleware {

			call( scope, ...args /* request, response, next */ ){

			}

		}

		return new MyMiddleware( );
	```;

	return function( request, response, next ){


		next( );
	};

};
