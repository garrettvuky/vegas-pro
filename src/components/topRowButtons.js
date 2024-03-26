export default function TopRowButtonNav({onEffect}) {
    return (
        <div className='top-row-btn-nav'>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>File Explorer</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>Project Media</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>Tutorial</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={onEffect}>VideoFX</div> 
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>Media Generator</div> 
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>Transitions</div> 
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>Notes</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>Search</div>
        </div>
        <div className='top-row-btn-container-last'>
          <div className='top-row-btn' onClick={()=> {alert('Feature Not Yet Implemented')}}>Help</div>
        </div>
      </div>
    );
}