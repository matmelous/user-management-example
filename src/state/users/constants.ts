import { usersSlice } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const initialState: usersSlice={
    data:[
        {
            id:uuidv4(),
            name:"matheus",
            password:"123456"
        }
    ],
    currentUser:null,
}
