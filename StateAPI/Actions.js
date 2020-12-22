/* Contains a list of action that set the App state 
	  
	*setDataShelf( dataShelfObject )
	*loadDefault()
	
	*setFilename( nameString )
	
	* addBook( booknameString )
	* addPage( bookindexNumber, nameString )
	* renameBook( bookindexNumber, nameString )
	* renamePage( bookindexNumber, pageIndexNumber, nameString )
	* deleteBook( bookindexNumber )
	* deletePage( bookindexNumber, pageIndexNumber )
	
	* moveUp( bookindexNumber, pageIndexNumber ) 
	* moveDown( bookindexNumber, pageIndexNumber ) 
	* sortShelf()
	
	* setQuizState( isQuiz ) 
	* setSearchState( isSearch )
	* setSearchText( text ) 
	
	* setOpenPage( bookindexNumber, pageIndexNumber, isShow )
	* setEditPage( bookindexNumber, pageIndexNumber, isShow )
	
	* setShowAddBook( isShow )
	* setShowAddPage( bookindexNumber, isShow ) 
	* setShowOption( bookindexNumber, pageIndexNumber, isShow )
	* setShowDetails( isShow) 
	* setShowRename( isShow)
	* setShowDelete( isShow )
	* setTextFieldRef( ref )
	
	* setStatusDefault() 

*/
import { ACT } from './rootReducer';

export function setDataShelf( dataShelfObject ) {
	return {
		type: ACT.setshelf, payload: dataShelfObject
	}
}

export function loadDefault() {
	return {
		type: ACT.loaddefault
	}
}

export function setFilename( nameString ) {
	return {
		type: ACT.fname, payload: nameString
	}
}

export function addBook( booknameString ) {
	return {
		type: ACT.addbook, payload: booknameString
	}
}

export function addPage( bookindexNumber, nameString ) {
	return {
		type: ACT.addpage, index: bookindexNumber, payload: nameString
	}
}

export function updateContentOfPage( bookindexNumber, pageIndexNumber, content ) {
	return {
		type: ACT.updatecontent, index: bookindexNumber, page: pageIndexNumber, payload: content
	}
}

export function renameBook( bookindexNumber, nameString ) {
	return {
		type: ACT.renamebook, index: bookindexNumber, payload: nameString
	}
}

export function renamePage( bookindexNumber, pageIndexNumber, nameString ) {
	return {
		type: ACT.renamepage, index: bookindexNumber, page: pageIndexNumber, payload: nameString
	}
}

export function deleteBook( bookindexNumber ) {
	return {
		type: ACT.deletebook, index: bookindexNumber
	}
}

export function deletePage( bookindexNumber, pageIndexNumber ) {
	return {
		type: ACT.deletepage, index: bookindexNumber, page: pageIndexNumber
	}
}

export function moveUp( bookindexNumber, pageIndexNumber ) {
	return {
		type: ACT.moveup, index: bookindexNumber, page: pageIndexNumber
	}
}

export function moveDown( bookindexNumber, pageIndexNumber ) {
	return {
		type: ACT.movedown, index: bookindexNumber, page: pageIndexNumber
	}
}

export function sortShelf() {
	return {
		type: ACT.alphabetically
	}
}

/*====================================================================*/
export function setQuizState( isQuiz ) {
	return {
		type: ACT.setquizstate, payload: isQuiz
	}
}

export function setSearchState( isSearch ) {
	return {
		type: ACT.setsearchstate, payload: isSearch
	}
}

export function setOpenPage( bookindexNumber, pageIndexNumber, isShow ) {
	return {
		type: ACT.setopenpage, index: bookindexNumber, page: pageIndexNumber, payload: isShow
	}
}

export function setEditPage( bookindexNumber, pageIndexNumber, isShow ) {
	return {
		type: ACT.seteditpage, index: bookindexNumber, page: pageIndexNumber, payload: isShow
	}
}

export function setShowAddBook( isShow ) {
	return {
		type: ACT.setshowaddbook, payload: isShow 
	}
}

export function setShowAddPage( bookindexNumber, isShow ) {
	return {
		type: ACT.setshowaddpage, index: bookindexNumber, payload: isShow 
	}
}

export function setShowOption( bookindexNumber, pageIndexNumber, isShow ) {
	return {
		type: ACT.setshowoption, index: bookindexNumber, page: pageIndexNumber, payload: isShow
	}
}

export function setShowDetails( isShow) {
	return {
		type: ACT.setshowdetails, payload: isShow
	}
}

export function setShowRename( isShow) {
	return {
		type: ACT.setshowrename, payload: isShow
	}
}

export function setShowDelete(  isShow) {
	return {
		type: ACT.setshowdelete, payload: isShow
	}
}

export function setTextFieldRef( ref ) {
	return {
		type: ACT.settextfieldref, payload: ref
	}
}

export function setSearchText( text, isSearch ) {
	return {
		type: ACT.setsearchtext, search: isSearch, payload: text
	}
}

export function setStatusDefault() {
	return {
		type: ACT.setstatusdefault
	}
}
