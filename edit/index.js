import React from 'react'
import EditLayer2 from './EditLayer2'
import EditLayer1 from './EditLayer1'
import {useMyData, useEdit} from '../hooks'

// When the selected layout's section instances mount, they fill this context variable up with their data, either defaults or editable.
// Section instances needs to be added into this before they can be edited!
const EditMyData = React.createContext();

export {useEdit, EditLayer2, EditMyData, EditLayer1, useMyData}