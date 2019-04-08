describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=> {
      assert.equal(window.cipher.encode ("ABC", 33), "HIJ");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=> {
      assert.equal(window.cipher.encode ("abc", 33), "hij");
    });

    it('debería retornar " " para " " con offset 33', ()=> {
      assert.equal(window.cipher.encode (" ", 33), " ");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=> {
      assert.equal(window.cipher.decode ("HIJ", 33), "ABC");
  });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=> {
      assert.equal(window.cipher.decode ("hij", 33), "abc");

    it('debería retornar " " para " " con offset 33', ()=> {
      assert.equal(window.cipher.decode (" ", 33), " ");
    });
    });
  });
});