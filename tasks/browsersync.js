import bs from 'browser-sync';

export const browsersync = (done) => {
  bs({
    server: true,
    open: false,
    ghostMode: false,
  });
  done();
};

export const bsReload = (done) => {
  bs.reload();
  done();
};
