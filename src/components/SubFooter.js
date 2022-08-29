import React from 'react';
import ReactPlayer from 'react-player';
import { Player } from "video-react";
export default function SubFooter(){
	return(

			<div className="container-fluid text-center text-light">
			<div className="container">
				<h3 className="p-2">Find out and watch LTO safety rules!</h3>
		    	<div className="d-flex justify-content-center p-2">
		    		<ReactPlayer url='https://www.youtube.com/watch?v=GVmtu7niGUY' />
		    	</div>
		    	<h3 className="p-2">We as MBCToda are all dedicated and we respect others so others respect unto us.</h3>
		  	</div>
		    </div>
		)
}