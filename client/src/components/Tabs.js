import React from "react";
import { useState } from 'react';
import AddPlayer from './AddPlayer'
import ChooseRole from './ChooseRole' 
import '../style/MainMenu.css'
import '../style/button.css'

const Tabs = () => {
	const [isAddingShown,setIsAddingShown] = useState(true);
	const [isChoosingShown, setIsChoosingShown] = useState(false);
	const handleAddClick = (e) => {
		setIsAddingShown(true);
		setIsChoosingShown(false);

	}
	const handleChooseClick = (e) => {
		setIsChoosingShown(true);
		setIsAddingShown(false);
	}
    return (
		<div>
			<div className="child-tabs">
				<button className="button" onClick={handleAddClick}> Add Player </button>
				<button className="button" onClick={handleChooseClick}> Select Roles </button>
			</div>
			<div className="player-select">
				{isAddingShown && <AddPlayer/>}
				{isChoosingShown && <ChooseRole/>}
			</div>
		</div>
	);
}

export default Tabs;
