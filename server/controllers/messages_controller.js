const messages = []
const id = 0

module.exports = {
  create: (req,res) => {
    messages.push({
      id,
      text:res.body.text,
      time:res.body.time
     })
     id++
     res.status(200).send(messages)
  },
  
  read: (req,res) => {
    res.status(200).send(messages)
  },

  update: (req,res) => {
    const { messageId } = req.params.id
    const { text } = req.body.text
    const { time } = req.body.time

    messages.forEach((ele,i) => {
      if (ele.id === messageId){
        ele = {
          id:messageId,
          text:text,
          time:time
        }
      }
    })
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  }
}