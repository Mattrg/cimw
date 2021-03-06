function myPiano(){

const triggerKeyPress = note => {
  synth.triggerAttackRelease(note, '16n')
  socket.emit('press-key', note)
}

piano.on('change', event =>{
  let note = event.note, on = event.state
  if(on && note === 96) triggerKeyPress('C6') 
    else if(on && note === 95) triggerKeyPress('B5')
    else if(on && note === 94) triggerKeyPress('Bb5')
    else if(on && note === 93) triggerKeyPress('A5')
    else if(on && note === 92) triggerKeyPress('Ab5')
    else if(on && note === 91) triggerKeyPress('G5')
    else if(on && note === 90) triggerKeyPress('Gb5')
    else if(on && note === 89) triggerKeyPress('F5')
    else if(on && note === 88) triggerKeyPress('E5')
    else if(on && note === 87) triggerKeyPress('Eb5')
    else if(on && note === 86) triggerKeyPress('D5')
    else if(on && note === 85) triggerKeyPress('Db5')
    else if(on && note === 84) triggerKeyPress('C5') 
    else if(on && note === 83) triggerKeyPress('B4')
    else if(on && note === 82) triggerKeyPress('Bb4')
    else if(on && note === 81) triggerKeyPress('A4')
    else if(on && note === 80) triggerKeyPress('Ab4')
    else if(on && note === 79) triggerKeyPress('G4')
    else if(on && note === 78) triggerKeyPress('Gb4')
    else if(on && note === 77) triggerKeyPress('F4')
    else if(on && note === 76) triggerKeyPress('E4')
    else if(on && note === 75) triggerKeyPress('Eb4')
    else if(on && note === 74) triggerKeyPress('D4')
    else if(on && note === 73) triggerKeyPress('Db4')
    else if(on && note === 72) triggerKeyPress('C4')
    else if(on && note === 71) triggerKeyPress('B3')
    else if(on && note === 70) triggerKeyPress('Bb3')
    else if(on && note === 69) triggerKeyPress('A3')
    else if(on && note === 68) triggerKeyPress('Ab3')
    else if(on && note === 67) triggerKeyPress('G3')
    else if(on && note === 66) triggerKeyPress('Gb3')
    else if(on && note === 65) triggerKeyPress('F3')
    else if(on && note === 64) triggerKeyPress('E3')
    else if(on && note === 63) triggerKeyPress('Eb3')
    else if(on && note === 62) triggerKeyPress('D3')
    else if(on && note === 61) triggerKeyPress('Db3')
    else if(on && note === 60) triggerKeyPress('C3')
    else if(on && note === 59) triggerKeyPress('B2')
    else if(on && note === 58) triggerKeyPress('Bb2')
    else if(on && note === 57) triggerKeyPress('A2')
    else if(on && note === 56) triggerKeyPress('Ab2')
    else if(on && note === 55) triggerKeyPress('G2')
    else if(on && note === 54) triggerKeyPress('Gb2')
    else if(on && note === 53) triggerKeyPress('F2')
    else if(on && note === 52) triggerKeyPress('E2')
    else if(on && note === 51) triggerKeyPress('Eb2')
    else if(on && note === 50) triggerKeyPress('D2')
    else if(on && note === 49) triggerKeyPress('Db2')
    else if(on && note === 48) triggerKeyPress('C2')    
})

const notes = {
  'C6': 96,
  'B5': 95,
  'Bb5': 94,
  'A5': 93,
  'Ab5': 92,
  'G5': 91,
  'Gb5': 90,
  'F5': 89,
  'E5': 88,
  'Eb5': 87,
  'D5': 86,
  'Db5': 85,
  'C5': 84,
  'B4': 83,
  'Bb4': 82,
  'A4': 81,
  'Ab4': 80,
  'G4': 79,
  'Gb4': 78,
  'F4': 77,
  'E4': 76,
  'Eb4': 75,
  'D4': 74,
  'Db4': 73,
  'C4': 72,
  'B3': 71,
  'Bb3': 70,
  'A3': 69,
  'Ab3': 68,
  'G3': 67,
  'Gb3': 66,
  'F3': 65,
  'E3': 64,
  'Eb3': 63,
  'D3': 62,
  'Db3': 61,
  'C3': 60,
  'B2': 59,
  'Bb2': 58,
  'A2': 57,
  'Ab2': 56,
  'G2': 55,
  'Gb2': 54,
  'F2': 53,
  'E2': 52,
  'Eb2': 51,
  'D2': 50,
  'Db2': 49,
  'C2': 48,
}

socket.on('press-key', key => {
  let note = notes[key]
  let keyToPress = piano.keys.find(key => key.note === note)
  piano.toggleKey(keyToPress.note)
})    

}