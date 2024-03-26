export default function FileNav() {
    return (
    <div className="fileNav">
        <div className="fileNav-btn file-dropdown">File
            <div class="dropdown-content">
                <a href="#" onClick={()=> {alert('video successfully rendered')}}>Render As...</a>
            </div>
        </div>
        <div className="fileNav-btn file-dropdown" >Edit
            <div class="dropdown-content">
                <a href="#">Feature Not Yet Implemented</a>
            </div>
        </div>
        <div className="fileNav-btn file-dropdown">View
            <div class="dropdown-content">
                <a href="#">Feature Not Yet Implemented</a>
            </div>            
        </div>
        <div className="fileNav-btn file-dropdown">Insert
            <div class="dropdown-content">
                <a href="#">Feature Not Yet Implemented</a>
            </div>            
        </div>
        <div className="fileNav-btn file-dropdown">Tools
            <div class="dropdown-content">
                <a href="#">Feature Not Yet Implemented</a>
            </div>            
        </div>
        <div className="fileNav-btn file-dropdown">Options
            <div class="dropdown-content">
                <a href="#">Feature Not Yet Implemented</a>
            </div>            
        </div>
        <div className="fileNav-btn file-dropdown">Help
            <div class="dropdown-content">
                <a href="#">Feature Not Yet Implemented</a>
            </div>            
        </div>
    </div>
    );
}