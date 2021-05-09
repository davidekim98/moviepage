import React, {useEffect} from "react";


function Detail(props) {
  useEffect(()=> {
	
	console.log(props)
	
	if (props.location.state === undefined) {
		props.history.push("/");
	}
	
  },[])
  
  return (
  	<div>
		Detail Page  
	</div>
  )
}

export default Detail