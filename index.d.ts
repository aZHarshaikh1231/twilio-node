import lib from "./lib";
export = lib;
import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.net.URI;
import java.math.BigDecimal;

public class Example {
  // Find your Account Sid and Token at twilio.com/console
  public static final String ACCOUNT_SID = "AC8c21328e722007a34cc40669e94911ee";
  public static final String AUTH_TOKEN = "4b8b5dde09c37d228d2a40145c5bc294";

  public static void main(String[] args) {
    Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    Message message = Message.creator(
      new com.twilio.type.PhoneNumber("whatsapp:+917786888111"),
      new com.twilio.type.PhoneNumber("whatsapp:+14155238886"),
      "Your appointment is coming up on July 21 at 3PM"

    .create();

    System.out.println(message.getSid());
  }
}