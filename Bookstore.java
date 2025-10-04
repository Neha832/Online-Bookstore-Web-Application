import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class Bookstore extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        try {
            Connection conn = DBConnection.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM books");
            
            StringBuilder json = new StringBuilder("[");
            while (rs.next()) {
                json.append("{")
                    .append("\"book_id\":").append(rs.getInt("book_id")).append(",")
                    .append("\"title\":\"").append(rs.getString("title")).append("\",")
                    .append("\"author\":\"").append(rs.getString("author")).append("\",")
                    .append("\"price\":").append(rs.getDouble("price"))
                    .append("},");
            }
            if(json.length() > 1) json.deleteCharAt(json.length()-1);
            json.append("]");
            out.print(json.toString());
        } catch (Exception e) {
            out.print("[]");
            e.printStackTrace();
        }
    }
}
