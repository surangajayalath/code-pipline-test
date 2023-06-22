var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
}
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true

<html>  <!-- Noncompliant -->
...
</html>

  class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
    super();         // Noncompliant
    super.doSomething();
  }
}
import javax.crypto.Cipher;
import java.security.NoSuchAlgorithmException;
import javax.crypto.NoSuchPaddingException;

public class test {

    public static void main(String[] args) {
      try
      {
        Cipher c1 = Cipher.getInstance("DES"); // Noncompliant: DES works with 56-bit keys allow attacks via exhaustive search
        Cipher c7 = Cipher.getInstance("DESede"); // Noncompliant: Triple DES is vulnerable to meet-in-the-middle attack
        Cipher c13 = Cipher.getInstance("RC2"); // Noncompliant: RC2 is vulnerable to a related-key attack
        Cipher c19 = Cipher.getInstance("RC4"); // Noncompliant: vulnerable to several attacks (see https://en.wikipedia.org/wiki/RC4#Security)
        Cipher c25 = Cipher.getInstance("Blowfish"); // Noncompliant: Blowfish use a 64-bit block size makes it vulnerable to birthday attacks

        NullCipher nc = new NullCipher(); // Noncompliant: the NullCipher class provides an "identity cipher" one that does not transform or encrypt the plaintext in any way.
      }
      catch(NoSuchAlgorithmException|NoSuchPaddingException e)
      {
      }
    }
}

  <object></object> <!-- Noncompliant -->

<object>
  <object></object> <!-- Noncompliant -->
</object>

  String firstName = getFirstName(); // String overrides equals
String lastName = getLastName();

if (firstName == lastName) { ... }; // Non-compliant; false even if the strings have the same value
