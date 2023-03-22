const network = {
  ip: `http://localhost`,
  port: `3001`,
  combined() {
    return `${this.ip}:${this.port}`;
  },
};
