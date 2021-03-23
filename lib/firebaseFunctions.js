import {db} from './firebase';

//Create new song

export const addSong = async (song) => {

    const result = await db.collection('liedjes').add(song)

    if(!result){
        return "Er is iets foutgegaan contacteer wasbeer als dit vaker gebeurt xd"
    }

    return "Liedje toegevoed"

}

//Delete song

//Patch song