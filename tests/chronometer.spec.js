describe('Chronometer class', () => {
  let chronometer;

  beforeEach(() => {
    chronometer = new Chronometer();
  });

  it('should not receive any arguments', () => {
    expect(Chronometer.length).toEqual(0);
  });

  it('should have a `currentTime` property with the initial value set to 0', () => {
    expect(chronometer.currentTime).toBeDefined();
    expect(chronometer.currentTime).toEqual(0);
  });

  it('should have a `intervalId` property with the initial value set to null', () => {
    expect(chronometer.intervalId).toBeDefined();
    expect(chronometer.intervalId).toEqual(null);
  });

  describe('"start" method', () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('should be declared', () => {
      expect(typeof chronometer.start).toEqual('function');
    });

    it('should receive 1 argument (printTimeCallback)', () => {
      expect(chronometer.start.length).toEqual(1);
    });    

    it('should increment by 1 the currentTime property on every 1 second interval', () => {
      chronometer.start();
      jasmine.clock().tick(1000);
      expect(chronometer.currentTime).toEqual(1);
    });

    it('should invoke the passed argument (printTimeCallback) every 1 second', () => {
      const printTimeCallback = jasmine.createSpy('printTimeCallback');
      chronometer.start(printTimeCallback);
      jasmine.clock().tick(2000);
      expect(printTimeCallback).toHaveBeenCalledTimes(2);
    });

    it('should increment the currentTime property to 3 after 3 seconds', () => {
      chronometer.start();      
      jasmine.clock().tick(3000);
      expect(chronometer.currentTime).toEqual(3);
    });
  });

  describe('"getMinutes" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.getMinutes).toEqual('function');
    });

    it('should not receive any arguments', () => {
      expect(chronometer.getMinutes.length).toEqual(0);
    });        

    it('should return a number', () => {
      chronometer.currentTime = 65;
      expect(typeof chronometer.getMinutes()).toEqual('number');
    });

    it('should return a number without decimal places', () => {
      chronometer.currentTime = 65;
      expect(chronometer.getMinutes() % 1).toEqual(0);
    });

    it('should return the number of entire minutes passed', () => {
      chronometer.currentTime = 65;
      expect(chronometer.getMinutes()).toEqual(1);
    });

    it("should return 0 when the chronometer hasn't been started", () => {
      expect(chronometer.getMinutes()).toEqual(0);
    });

    it('should return the number of minutes passed even after a very long time', () => {
      chronometer.currentTime = 50210;
      expect(chronometer.getMinutes()).toEqual(836);
    });
  });

  describe('"getSeconds" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.getSeconds).toEqual('function');
    });

    it('should not receive any arguments', () => {
      expect(chronometer.getSeconds.length).toEqual(0);
    });    

    it('should return a number', () => {
      chronometer.currentTime = 3;
      expect(typeof chronometer.getSeconds(0)).toEqual('number');
    });

    it("should return 0 when the currentTime counting haven't started", () => {
      chronometer.currentTime = 0;
      expect(chronometer.getSeconds()).toEqual(0);
    });

    it('should return the seconds of the currentTime', () => {
      chronometer.currentTime = 15;
      expect(chronometer.getSeconds()).toEqual(15);
    });

    it('should return the seconds portion of the currentTime that remains after removing the minutes', () => {
      chronometer.currentTime = 115;
      expect(chronometer.getSeconds()).toEqual(55);
    });
  });

  describe('"computeTwoDigitNumber" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.computeTwoDigitNumber).toEqual('function');
    });

    it('should receive 1 argument (value)', () => {
      expect(chronometer.computeTwoDigitNumber.length).toEqual(1);
    });     

    it('should return a string', () => {
      expect(typeof chronometer.computeTwoDigitNumber(7)).toEqual('string');
    });

    it('should always return a string of length 2', () => {
      expect(chronometer.computeTwoDigitNumber(7).length).toEqual(2);
    });

    it("should return '00' when the value is 0", () => {
      expect(chronometer.computeTwoDigitNumber(0)).toEqual('00');
    });

    it("should return '15' when the value is 15", () => {
      expect(chronometer.computeTwoDigitNumber(15)).toEqual('15');
    });

    it("Should return '03' when the value is 3", () => {
      expect(chronometer.computeTwoDigitNumber(3)).toEqual('03');
    });
  });

  describe('"stop" method', () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('should be declared', () => {
      expect(typeof chronometer.stop).toEqual('function');
    });

    it('should not receive any arguments', () => {
      expect(chronometer.stop.length).toEqual(0);
    });        

    it('should call the clearInterval', () => {
      spyOn(window, 'clearInterval');
      chronometer.stop();
      expect(clearInterval).toHaveBeenCalled();
    });

    it('should stop a previously started chronometer', () => {
      chronometer.start();

      jasmine.clock().tick(1000);
      expect(chronometer.currentTime).toEqual(1);
      chronometer.stop();
      
      jasmine.clock().tick(2000);      
      expect(chronometer.currentTime).toEqual(1);
    });
  });

  describe('"reset" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.reset).toEqual('function');
    });

    it('should not receive any arguments', () => {
      expect(chronometer.reset.length).toEqual(0);
    });       

    it('should reset the value of the "currentTime" property to 0', () => {
      chronometer.currentTime = 5;
      chronometer.reset();
      expect(chronometer.currentTime).toEqual(0);
    });
  });

  describe('"split" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.split).toEqual('function');
    });

    it('should not receive any arguments', () => {
      expect(chronometer.split.length).toEqual(0);
    });           

    it('should return valid format with minutes and seconds "mm:ss"', () => {
      chronometer.currentTime = 5;
      expect(chronometer.split()).toEqual(`00:05`);
      chronometer.currentTime = 17;
      expect(chronometer.split()).toEqual(`00:17`);
      chronometer.currentTime = 60;
      expect(chronometer.split()).toEqual(`01:00`);
      chronometer.currentTime = 135;
      expect(chronometer.split()).toEqual(`02:15`);
      chronometer.currentTime = 135;
      expect(chronometer.split()).toEqual(`02:15`);
      chronometer.currentTime = 800;
      expect(chronometer.split()).toEqual(`13:20`);
    });

  });
});
