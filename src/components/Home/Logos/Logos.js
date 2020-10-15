import React from 'react';
import slack from '../../../imge/images/logos/slack.png';
import google from '../../../imge/images/logos/google.png';
import uber from '../../../imge/images/logos/uber.png';
import netflix from '../../../imge/images/logos/netflix.png';
import airbb from '../../../imge/images/logos/airbnb.png'


const Logos = () => {
    return (
        <nav class=" container navbar navbar-light justify-content-around ">
  <a class="navbar-brand" href="#">
      <img src={slack} width="120" height="auto" class="d-inline-block align-top"  alt=""/>
  </a>
  <a class="navbar-brand" href="#">
      <img  src={google} width="100" height="auto" class="d-inline-block align-top"  alt=""/>
  </a>
  <a class="navbar-brand" href="#">
      <img src={uber} width="80" height="auto" class="d-inline-block align-top"  alt=""/>
  </a>
  <a class="navbar-brand" href="#">
      <img src={netflix} width="100" height="auto" class="d-inline-block align-top"  alt=""/>
  </a>
  <a class="navbar-brand" href="#">
      <img src={airbb} width="120" height="auto" class="d-inline-block align-top"  alt=""/>
  </a>

</nav>
    );
};

export default Logos;
