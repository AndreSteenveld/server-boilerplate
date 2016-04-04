import { assert, AssertionError } from "chai";

describe( "Boilerplate test suite ::", function( ){

	this.timeout( 500 );

	it( "should assert something and succeed", function( ){

		assert( true, "True doesn't seem to be true" );

	});

	it( "should not assert and fail", function( ){

		assert.throws(
			( ) => assert( false, "Asserting false always throws an assertion error" ),
			AssertionError
		);

	});

	it( "should also do asynchronous tests", function( done ){

		setTimeout( done, 250 );

	});


	it.skip( "should timeout long running test", function( done ){

		setTimeout( done, 1000 );

	});

});
