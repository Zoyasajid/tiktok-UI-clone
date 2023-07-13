import React,{useState} from 'react';
// function FooterRight({ likes, shares, messages }) {
// 	const [liked, setLiked] = useState(false)

// 	return (
// 		<div className="footer-right">
// 			<div className="sidebar-icon">
// 				<FavoriteBorderIcon
// 					style={{ width: '40px', height: '40px' }}
// 					onClick={() => {
// 					}}
// 				/>

// 				<p>{likes}</p>
// 			</div>

function FooterRight({ likes, shares, messages }){
  const [liked, setLiked] = useState(likes)


  return(
<div className="footer-right">
	<div className="sidebar-icon">
		<i class="fa-regular fa-heart" onClick={()=>setLiked(likes+1)}></i>
	<p>{liked}</p>
	</div>
	<div className="sidebar-icon">
  <i class="fa-solid fa-message"></i>
		<p>{messages}</p>
	</div>
	<div className="sidebar-icon record-below">
	{/* <i class="fa-regular fa-share" ></i> */}
	<i class="fa fa-share-alt"></i>
		<p>{shares}</p>
	</div>
	<div className="sidebar-icon record">
		<img src="https://static.thenounproject.com/png/934821-200.png" style={{width: '80px',height: '70px'}}/>
	</div>
</div>)
}
export default FooterRight
