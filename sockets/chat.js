const Message = require('../models/Message');
module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join', ({ userId }) => {
      socket.join(userId);
    });

    socket.on('message', async ({ from, to, text }) => {
      const msg = await Message.create({ from, to, text });
      io.to(to).emit('message', msg);
    });

    socket.on('typing', ({ to }) => {
      io.to(to).emit('typing', true);
    });

    socket.on('disconnect', () => {
      // handle offline status
    });
  });
};
