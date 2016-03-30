
import path from "path";
import compress from "compression";
import cors from "cors";
import favicon from "serve-favicon";
import * as parser from "body-parser";

import * as feathers from "./feathers";
import middleware from "./middleware";
import services from "./services";

const CONFIG_PATH = path.join( __dirname, ".." );

const application = feathers.application( );

application.configure( feathers.configuration( CONFIG_PATH ) );

const
	PUBLIC_PATH  = application.get( "public" ),
	FAVICON_PATH = path.join( PUBLIC_PATH, "favicon.ico" );

application
	.use( compress( ) )
	.options( "*", cors( ) )
	.use( favicon( FAVICON_PATH ) )
	.use( "/", feathers.application.static( PUBLIC_PATH ) )
	.use( parser.json( ) )
	.use( parser.urlencoded({ extended: true }) )
	.configure( feathers.hooks( ) )
	.configure( feathers.rest( ) )
	.configure( feathers.primus({ transformer: "websockets" }) )
	.configure( services )
	.configure( middleware );

const
	port   = application.get( "port" ),
	server = application.listen( port );

server.on( "listening", ( ) => console.log( `Feathers application started on ${ application.get( "host" ) }:${ port }`) );
