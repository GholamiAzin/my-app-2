import './SubUrl.css';
function SubUrl(props) {
    return(
            <div className='exp'>
                <a className='link-suburl'><span className='name-suburl'>{props.name}</span></a>
                <span className='text-suburl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus ...</span>    
            </div>            
    )
}
export default SubUrl;