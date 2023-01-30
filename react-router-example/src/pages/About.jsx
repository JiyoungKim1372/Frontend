import React from "react";
import { useSearchParams  } from "react-router-dom";

// import queryString from "query-string";

export default function About(props) {

  // const searchParams = props.location.search;
  // console.log(searchParams);
  
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get('name')); // 'mark'

  const name = searchParams.get('name')

 
  return (<div>
    <h2>About 페이지 입니다.</h2>
    {name && <p>name은 {name} 입니다. </p>}
    </div>
  );

 
}