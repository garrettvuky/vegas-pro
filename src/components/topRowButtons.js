export default function TopRowButtonNav({onEffect}) {
    return (
        <div className='top-row-btn-nav'>
        <div className='top-row-btn-container'>
          <div className='top-row-btn'>File Explorer</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn'>Project Media</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn'>Tutorial</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn' onClick={onEffect}>VideoFX</div> 
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn'>Media Generator</div> 
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn'>Transitions</div> 
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn'>Notes</div>
        </div>
        <div className='top-row-btn-container'>
          <div className='top-row-btn'>Search</div>
        </div>
        <div className='top-row-btn-container-last'>
          <div className='top-row-btn'>Help</div>
        </div>
      </div>
    );
}