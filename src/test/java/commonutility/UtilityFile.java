package commonutility;
import java.text.SimpleDateFormat;
import java.util.Date;

public class UtilityFile {

	public static String getDate() {
		SimpleDateFormat formatter = new SimpleDateFormat("YYYY-MM-dd");
		Date date = new Date();
		return formatter.format(date);

	}

}
