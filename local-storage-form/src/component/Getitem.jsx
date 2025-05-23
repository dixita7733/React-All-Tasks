import React from 'react'
import "./getitem.css"

const Getitem = ({name, email}) => {
  return (
    <>
{/* <div className='id-card-container'>
<div class="id-card-tag"></div>
	<div class="id-card-tag-strip"></div>
	<div class="id-card-hook"></div>
	<div class="id-card-holder">
		<div class="id-card">
			<div class="header">
				<img src="https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/62/cd/f5/62cdf5b2-a731-76ca-aa69-fe82c8a09d94/source/512x512bb.jpg"></img>
			</div>
			<div class="photo">
				<img src="https://i.imgur.com/5WmGvAG.png"></img>
			</div>
			<h2>{name}</h2>
			<div class="qr-code">
				
			</div>
			<h3>Student</h3>
      <h3>{password}</h3>
			<hr></hr>
			<p><strong>NIIT University</strong> Neemrana, NH-8 Delhi-Jaipur highway </p>
			<p>District Alwar, Rajasthan <strong>301705</strong></p>
			<p>Ph: 01494-660600, 7073222393</p>

		</div>
	</div>
    </div> */}

<div className='id-card-container'>
<div id="id-card">
  <div class="id-card material-ui-shadow">

    <div class="id-card__mugshot">
      <img src="http://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png" id="id-card-mugshot"></img>
    </div>

    <div class="id-card__logo logo">
      <span class="logo__big">BO-SEGNER</span><br></br>
      <span class="logo__small">foundation</span>
    </div>
    

    <div class="id-card__subject-id">

    </div>

    <div class="id-card__banner">
      <span class="id-card__banner-text">EXPERIMENT S9.3a</span>
    </div>

    <div class="id-card__details">
      <div class="id-card__detail">
        <span class="id-card__detail-label">Name:</span>
        <span class="id-card__detail-value" id="id-card-name">{name}</span>
      </div>
      <div class="id-card__detail">
        <span class="id-card__detail-label">Email</span>
        <span class="id-card__detail-value" id="id-card-date-of-birth">{email}</span>
      </div>
      <div class="id-card__detail">
        <span class="id-card__detail-label">Issue Date</span>
        <span class="id-card__detail-value">08/01/2018</span>
      </div>
      <div class="id-card__detail">
        <span class="id-card__detail-label">Release Date</span>
        <span class="id-card__detail-value">08/01/2020</span>
      </div>
    </div>



  </div>
</div>
</div>
    </>
  )
}

export default Getitem
