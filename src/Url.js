import './Url.css';
function Url(params) {
    return(
        <div className='main'>
            <div className='url'>
                <svg className='url-logo' width="20px" height="20px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="rgba(59,130,246,1)"></circle><g  stroke="rgba(59,130,246,1)" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                <div className='url-itself'>
                    <span className='url-name'>{params.name}</span>
                    <span className='show-url'>https://{params.name}.com       :</span>
                </div>
            </div>
            <div className='explanation'>
                <a className='name-link'><span className='name'>{params.name}</span></a>
                <span className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus ...</span>    
            </div>            
        </div>
    )
}
export default Url;