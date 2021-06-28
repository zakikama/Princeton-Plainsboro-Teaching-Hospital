
 import Sidebar from '../Sidebar/index'
import Card from '../Card/index';
import '../assets/styles/DoctorProfile.css'


function DoctorProfile() {
  

  return (
  <div class="flex-container">
  <div class="flex-child magenta">
      <Sidebar/>
  </div>
  <div class="flex-child green">
    
      <Card />
      
    </div>
    </div>
  );
}

export default DoctorProfile;