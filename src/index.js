
'use strict';

var questions = [
    {
        "In which city were the first Modern Olympics held?": [
            "Athens",
            "Munich",
            "Barcelona",
            "Olympia"

        ]
    },
    {
        "In which year were the first Modern Olympics held?": [
            "1896",
            "1798",
            "1968",
            "1698"
        ]
    },
    {
        "When was the original Olympiad first held?": [
            "776 B.C.",
            "1698",
            "660 B.C.",
            "1896"
        ]
    },
    {
        "Who has won the maximum number of gold medals at a single Olympic Games in the history of the Olympics?": [
            "Michael Phelps",
            "Mark Spitz ",
            "Abebe Bikila ",
            "James Connelly"
        ]
    },
    {
        "Who set a record for the most gold medals in a single Olympic Games at the 1972 Munich Olympics?": [
            "Mark Spitz",
            "Nadia Comaneci ",
            "Abebe Bikila",
            "James Connelly"
        ]
    },
    {
        "Name the person who has won the maximum number of total career Olympic medals.": [
            "Michael Phelps",
            "Larissa Latynina",
            "Paavo Nurmi",
            "Nikolay Andrianov"

        ]
    },
    {
        "Who was the first winner in modern Olympics?": [
            "James Connolly",
            "Mark Spitz",
            "Nadia Comaneci",
            "Abebe Bikila"
        ]
    },
    {
        "Who was the first gymnast to score a perfect 10 at the Olympics?": [
            "Nadia Comaneci",
            "James Connelly",
            "Mark Spitz",
            "Abebe Bikila"
        ]
    },
    {
        "What is the distance of the marathon race in the Olympics?": [
            "26 miles 385 yards",
            "21 miles 685 yards",
            "24 miles 835 yards",
            "22 miles 385 yards"
        ]
    },
    {
        "Who is the athlete to win the Olympic marathon barefoot?": [
            "Abebe Bikila",
            "Nadia Comaneci",
            "Kipchoge Keino",
            "Mark Spitz"
        ]
    },
    {
        " What do the rings on the Olympic Games flag represent?": [
            "Five continents of the world",
            "Seven continents of the world",
            "Seven primary colors",
            "Five primary colors"
        ]
    },
    {
        "At what frequency are the Olympic Games held?": [
            "every 4 years",
            "every 3 years",
            "every 5 years",
            "every 6 years"
        ]
    },
    {
        "Which country's team always marches first at the Opening Ceremony of the Olympics?": [
            "Greece",
            "USA",
            "France",
            "host country"
        ]
    },
    {
        " Which country has won the maximum number of gold medals since the start of the Olympic Games?": [
            "USA",
            "Australia",
            "China",
            "Japan"
        ]
    },
    {
        "Which new game was introduced at the 2000 Sydney Olympics?": [
            "Triathlon",
            "Decathlon",
            "Pentathlon",
            "Septathlon"
        ]
    },
    {
        "Which country's team remained undefeated in field hockey between 1928 and 1956?": [
            "India",
            "France",
            "Italy",
            "China"
        ]
    },
    {
        "Which American diver won a double gold at the 1988 Seoul Olympics?": [
            "Greg Louganis",
            "Mark Spitz",
            "Dawn Fraser",
            "Pierre de Coubertin "
        ]
    },
    {
        "Who duplicated Jesse Owens' 1936 feat by winning four golds in track and field in the 1984 Los Angeles Olympics?": [
            "Carl Lewis",
            "Edwin Moses",
            "Derek Redmond",
            "Wilma Rudolph"
        ]
    },
    {
        "In which city were the Olympics in 2004 held?": [
            "Athens",
            "London",
            "Mexico City",
            "Tokyo"
        ]
    },
    {
        "The first ancient Olympic games, which were held way back in 776 BC in Olympia, Greece, were held in honor of which Greek god?": [
            "Zeus",
            "Hercules",
            "Apollo",
            "Athena"
        ]
    },
    {
        "At which Olympics did US swimmer, Mark Spitz, set an Olympic record by winning seven gold medals?": [
            "Munich, 1972",
            "Mexico City, 1986",
            "Munich, 1972",
            "Tokyo, 1964"
        ]
    },
    {
        "Which sport made its Olympic debut at the 1996 Olympics in Atlanta?": [
            "Beach volleyball",
            "Surfing",
            "Ultimate Frisbee",
            "Skateboarding"
        ]
    },
    {
        "Where were the first modern Olympic Winter Games held?": [
            "Chamonix, France",
            "Salt Lake City, Utah",
            "Stockholm, Sweden",
            "Moscow, Russia"
        ]
    },
    {
        "The 8th Olympic Winter Games saw the inclusion of which new women's competition?": [
            "Speed skating",
            "Figure skating",
            "Bobsled",
            "Ski jumping"
        ]
    },
    {
        "What is the only indoor Winter Olympics sport that does not involve ice skates?": [
            "Curling",
            "Skiing",
            "Luge",
            "Snowboarding"
        ]
    },
    {
        "What country has won both the most gold medals, and the most medals overall in the Winter Olympic Games?": [
            "Norway",
            "Russia/USSR",
            "United States",
            "Canada"
        ]
    },
    {
        "What team won the very first NBA game?": [
            "New York Knicks",
            "Chicago Stags",
            "Philadelphia Warriors",
            "Toronto Huskies"
        ]
    },
    {
        "What NBA player scored 100 points on March 2, 1962?": [
            "Wilt Chamberlain",
            "Kareem Abdul-Jabbar",
            "Elgin Baylor",
            "Bill Russell"
        ]
    },
    {
        "Who was the first player in NBA history to be elected league MVP by a unanimous vote?": [
            "Stephen Curry",
            "Lebron James",
            "Magic Johnson",
            "Michael Jordon"

        ]
    },
    {
        "Who scored the first three-point basket in NBA history?": [
            "Chris Ford",
            "Wes Unseld",
            "Gene Stump",
            "Larry Bird"
        ]
    },
    {
        "Who was the youngest player to score 10,000 point in the NBA?": [
            "Lebron James",
            "Michael Jordon",
            "Kobe Bryant",
            "Wilt Chamerlain"
        ]
    },
    {
        "What team owns the longest winning streak in NBA history?": [
            "Los Angeles Lakers",
            "Miami Heat",
            "Chicago Bulls",
            "Golden State Warriors"
        ]
    },
    {
        "Who is the all-time leading scorer in men's college basketball?": [
            "Pete Maravich",
            "Stephen Curry",
            "Freeman Williams",
            "Larry Bird"
        ]
    },
    {
        "Who was the first WNBA player to dunk in a playoff game?": [
            "Lisa Leslie",
            "Tamika Catchings",
            "Michelle Snow",
            "Brittney Griner"
        ]
    },
    {
        "What NBA player retired unexpectedly on November 7, 1991?": [
            "Magic Johnson",
            "Moses Malone",
            "Larry Bird",
            "Michael Jordon"

        ]
    },
    {
        "Who sank a 60-foot shot on April 29, 1970?": [
            "Jerry West",
            "Kareem Abdul-Jabbar",
            "Willis Reed",
            "Wilt Chamerlain"
        ]
    },
    {
        "What piece of basketball equipment formerly owned by Stephen Curry sold at auction for 3,190 dollars on August 21, 2016?": [
            "Mouthguard",
            "Tennis Shoes",
            "Headband",
            "Shoe Laces"
        ]
    },
    {
        "What NBA player has won the most league MVPs?": [
            "Kareem Abdul-Jabbar",
            "Michael Jordan",
            "Lebron James",
            "Stephen Curry"
        ]
    },
    {
        "How many points did LeBron James score in his first NBA game?": [
            "25",
            "19",
            "41",
            "61"
        ]
    },
    {
        " Who is the highest-scoring foreign-born player in NBA history?": [
            "Dirk Nowitzki",
            "Hakeem Olajuwon",
            "Detlef Schrempf",
            "Yao Ming"
        ]
    },
    {
        "Who was the shortest player in NBA history?": [
            "Muggsy Bougues",
            "Manute Bol",
            "Earl Boykins",
            "Spud Webb"
        ]
    },
    {
        "How many players were allowed on the court per team in the first college basketball game?": [
            "8",
            "11",
            "3",
            "7"
        ]
    },
    {
        "Who invented the game of basketball?": [
            "James Naismith",
            "Walter Camp",
            "Abner Doubleday",
            "Frank Mahan"
        ]
    },
    {
        " Who was the first NBA player to record a triple-double in the All-Star Game?": [
            "Michael Jordan",
            "Dwyane Wade",
            "Lebron James",
            "John Stockton"
        ]
    },
    {
        "What NBA team won eight consecutive championships from 1959 to 1966?": [
            "Boston Celtics",
            "Los Angeles Lakers",
            "Golden State Warriors",
            "New York Knicks"
        ]
    },
     {
        " Who was the first WNBA player to capture all three MVP awards in the same season?": [
            "Lisa Leslie",
            "Sheryl Swoopes",
            "Lauren Jackson",
            "Cynthia Cooper"
        ]
    },
    {
        "Choose the player who has scored the most points for the Utah Jazz": [
            "Karl Malone",
            "Darrell Griffith",
            "John Stockton",
            "Adrian Dantley"
        ]
    },
    {
        "Choose the player who has scored the most points for the Los Angeles Lakers": [
            "Kobe Bryant",
            "Elgin Baylor",
            "Kareem Abdul-Jabbar",
            "Jerry West"
        ]
    },
    {
        "Choose the player who has scored the most points for the Dallas Mavericks": [
            "Dirk Nowitzki",
            "Derek Harper",
            "Ronaldo Blackman",
            "Mark Aguirre"
        ]
    },
    {
        "Choose the player who has scored the most points for the Chicago Bulls": [
            "Michael Jordan",
            "Scottie Pippen",
            "Bob Love",
            "Luol Deng"
        ]
    },
    {
        "Choose the player who has scored the most points for the Houston Rockets": [
            "Hakeem Olajuwon",
            "Calvin Murphy",
            "Rudy Tomjanovich",
            "Elvin Hayes"
        ]
    },
    {
        "Choose the player who has scored the most points for the San Antonio Spurs": [
            "Tim Duncan",
            "Tony Parker",
            "George Gervin",
            "David Robinson"
        ]
    },
    {
        "Choose the player who has scored the most points for the Boston Celtics": [
            "John Havlicek",
            "Paul Pierce",
            "Robert Parish",
            "Larry Bird"
        ]
    },
    {
        "Choose the player who has scored the most points for the Indiana Pacers": [
            "Reggie Miller",
            "Billy Knight",
            "Roger Brown",
            "Rik Smits"
        ]
    },
    {
        "Choose the player who has scored the most points for the New York Knicks": [
            "Patrick Ewing",
            "Willis Reed",
            "Walt Frazier",
            "Allan Houston"
        ]
    },
    {
        "Choose the player who has scored the most points for the Atlanta Hawks": [
            "Dominique Wilkins",
            "Bob Pettit",
            "Lou Hudson",
            "Cliff Hagan"
        ]
    },
    {
        "Choose the player who has scored the most points for the Sacramento Kings": [
            "Oscar Robertson",
            "Jack Twyman",
            "Tiny Archibald",
            "Mitch Richmond"
        ]
    },
    {
        "Choose the player who has scored the most points for the Denver Nuggets": [
            "Alex English",
            "Carmelo Anthony",
            "Dan Issel",
            "David Thompson"
        ]
    },
    {
        "Choose the player who has scored the most points for the Philadelphia 76ers": [
            "Hal Greer",
            "Dolph Schayes",
            "Allen Iverson",
            "Julius Erving"
        ]
    },
    {
        "Choose the player who has scored the most points for the Miami Heat": [
            "Dwyane Wade",
            "Alonzo Mourning",
            "LeBron James",
            "Glen Rice"
        ]
    },
    {
        "Choose the player who has scored the most points for the Cleveland Cavaliers": [
            "LeBron James",
            "Brad Daugherty",
            "Zydrunas Ilgauskas",
            "Austin Carr"
        ]
    },
    {
        "Choose the player who has scored the most points for the Minnesota Timberwolves": [
            "Kevin Garnett",
            "Wally Szczerbiak",
            "Sam Mitchell",
            "Kevin Love"
        ]
    },
    {
        "Choose the player who has scored the most points for the Detroit Pistons": [
            "Isiah Thomas",
            "Dave Bing",
            "Joe Dumars",
            "Bob Lanier"
        ]
    },
    {
        "Choose the player who has scored the most points for the Oklahoma City Thunder": [
            "Gary Payton",
            "Kevin Durant",
            "Russell Westbrook",
            "Fred Brown"
        ]
    },
    {
        "Choose the player who has scored the most points for the Portland Trail Blazers": [
            "Clyde Drexler",
            "Clifford Robinson",
            "LaMarcus Aldridge",
            "Terry Porter"
        ]
    },
    {
        "Choose the player who has scored the most points for the Golden State Warriors": [
            "Wilt Chamberlain",
            "Paul Arizin",
            "Rick Barry",
            "Chris Mullin"
        ]
    },
    {
        "Choose the player who has scored the most points for the Phoenix Suns": [
            "Walter Davis",
            "Shawn Marion",
            "Kevin Johnson",
            "Alvan Adams"
        ]
    },
    {
        "Choose the player who has scored the most points for the Washington Wizards": [
            "Elvin Hayes",
            "Kevin Loughery",
            "Wes Unseld",
            "Jeff Malone"
        ]
    },
    {
        "Choose the player who has scored the most points for the Milwaukee Bucks": [
            "Kareem Abdul-Jabbar",
            "Sidney Moncrief",
            "Michael Redd",
            "Glenn Robinson"
        ]
    },
    {
        "Choose the player who has scored the most points for the Los Angeles Clippers": [
            "Randy Smith",
            "Bob McAdoo",
            "Elton Brand",
            "Blake Griffin"
        ]
    },
    {
        "Choose the player who has scored the most points for the Orlando Magic": [
            "Dwight Howard",
            "Nick Anderson",
            "Tracy McGrady",
            "Jameer Nelson"
        ]
    },
     {
        "Choose the player who has scored the most points for the Brooklyn Nets": [
            "Brook Lopez",
            "Buck Williams",
            "Richard Jefferson",
            "Vince Carter"
        ]
    },
     {
        "Choose the player who has scored the most points for the Toronto Raptors": [
            "DeMar DeRozan",
            "Chris Bosh",
            "Andrea Bargnani",
            "Vince Carter"

        ]
    },
     {
        "Choose the player who has scored the most points for the Charlotte Hornets": [
            "Dell Curry",
            "Larry Johnson",
            "Kemba Walker",
            "Gerald Wallace"
        ]
    },
     {
        "Choose the player who has scored the most points for the Memphis Grizzlies": [
            "Mike Conley",
            "Pau Gasol",
            "Zach Randolph",
            "Rudy Gay"
        ]
    },
     {
        "Choose the player who has scored the most points for the New Orleans Pelicans": [
            "David West",
            "Anthony Davis",
            "Ryan Anderson",
            "Chris Paul"
        ]
    },
    {
        "What year was the National Basketball Association first established?": [
            "1946",
            "1948",
            "1958",
            "1935"
        ]
    },
     {
        "Michael Jordan was drafted third overall in 1984. Which two players were selected ahead of him?": [
            "Hakeem Olajuwon and Sam Bowie",
            "Patrick Ewing and Hakeem Olajuwon",
            "Charles Barkley and Hakeem Olajuwon",
            "Karl Malone and Sam Bowie"
        ]
    },
     {
        "What year did the NBA-ABA merger occur?": [
            "1976",
            "1970",
            "1973",
            "1974"
        ]
    },
     {
        "Who is the only coach to win both a NCAA and NBA championship?": [
            "Larry Brown",
            "Chuck Daly",
            "John Calipari",
            "Rick Pitino"
        ]
    },
     {
        "Who was the first African American to play in an NBA game?": [
            "Earl Lloyd",
            "Sam Jones",
            "Wilt Chamberlain",
            "Bill Russell"
        ]
    },
     {
        "Who was the NBA’s first commissioner?": [
            "Maurice Podoloff",
            "Jackie Moon",
            "Walter Brown",
            "James A. Naismith"
        ]
    },
     {
        "Which ABA teams joined the NBA in the 1976 merger?": [
            "Nets, Nuggets, Pacers, and Spurs",
            "Supersonics, Suns, Spurs, and Nets",
            "Pacers, Nets, Nuggets, and Clippers",
            "Mavericks, Nuggets, Suns and Trail Blazer"
        ]
    },
     {
        "What number did Michael Jordan wear when he came out of retirement for the end of the 1994-1995 season?": [
            "45",
            "23",
            "24",
            "7"
        ]
    },
     {
        "Who was the NBA’s first African American coach?": [
            "Bill Russell",
            "Elgin Baylor",
            "K.C. Jones",
            "Lenny Wilkins"
        ]
    },
     {
        "Before they were the 'Showtime' Los Angeles Lakers, what US city was home to the franchise?": [
            "Minneapolis",
            "Kansas City",
            "Indianapolis",
            "St. Louis"
        ]
    },
     {
        "Since the NBA began handing out Most Valuable Player awards in 1956, who has won the most MVP trophies?": [
            "Kareem Abdul-Jabbar",
            "Michael Jordan",
            "Bill Russell",
            "Wilt Chamberlain"
        ]
    },
     {
        "Wilt Chamberlain scored 100 points for the Philadelphia Warriors in a single game played in Hershey, Pennsylvania back in 1962, in a game that was not televised. Who has scored the second most points in a single game?": [
            "Kobe Bryant",
            "Wilt Chamberlain",
            "Michael Jordan",
            "Pete Maravich"
        ]
    },
     {
        "Who is the NBA's career leading scorer?": [
            "Kareem Abdul-Jabbar",
            "Michael Jordan",
            "Karl Malone",
            "Kobe Bryant"
        ]
    },
    {
        "What team won the first Super Bowl?": [
            "Green Bay Packers",
            "New York Giants",
            "Dallas Cowboys",
            "Kansas City Chiefs"
        ]
    },
    {
        "What city did the Rams play in before St. Louis?": [
            "Los Angeles",
            "San Jose",
            "Houston",
            "Denver"
        ]
    },
    {
        "Which two NFL teams are tied for most fumbles in a season?": [
            "Chicago Bears and San Francisco",
            "New York Jets and New York Giants",
            "Green Bay Packers and New York Giants",
            "Kansas City Chiefs and Saint Louis Cardinals"
        ]
    },
    {
        "How many NFL teams are named after cats?": [
            "4",
            "6",
            "9",
            "0"
        ]
    },
    {
        "Which player won the 2005 NFL rushing title with 1,880 yards?": [
            "Shaun Alexander",
            "Curtis Martin",
            "Jamal Lewis",
            "LaDainian Tomlinson"
        ]
    },
    {
        "Who is the oldest team in NFL?": [
            "Cardinals",
            "Giants",
            "Bears",
            "Packers"
        ]
    },
    {
        "Which team has the most NFL titles?": [
            "Packers",
            "Cowboys",
            "Steelers",
            "Bears"
        ]
    },
    {
        "What year was the 1st NFL playoff game?": [
            "1932",
            "1970",
            "1920",
            "1967"
        ]
    },
    {
        "Who was the 1st Super Bowl MVP?": [
            "Bart Starr",
            "Vince Lombardi",
            "Paul Hornung",
            "Max McGee"
        ]
    },
    {
        "What is the most consecutive titles an NFL team has ever won?": [
            "3",
            "2",
            "8",
            "5"
        ]
    },
    {
        "How many Heisman trophy winners are in the NFL Hall of Fame?": [
            "8",
            "10",
            "12",
            "6"
        ]
    },
    {
        "How many NFL championships do the Steelers have?": [
            "6",
            "4",
            "3",
            "7"
        ]
    },
    {
        "How many NFL championships do the Lions have?": [
            "4",
            "5",
            "6",
            "7"
        ]
    },
    {
        "How many NFL championships do the Atlanta Falcons have?": [
            "0",
            "1",
            "3",
            "2"
        ]
    },
    {
        "What 49ers pass-catcher is associated with 'The Catch'?": [
            "Dwight Clark",
            "Joe Montana",
            "Jerry Rice",
            "John Taylor"
        ]
    },
    {
        "What game is known as 'The Greatest Game Ever Played'?": [
            "1958 NFL Championship Game",
            "Super Bowl 51",
            "1940 NFL Championship Game",
            "Super Bowl 1"
        ]
    },
    {
        "Which position player is known as 1 on the baseball diamond?": [
            "Pitcher",
            "Catcher",
            "First Baseman",
            "Second Baseman"
        ]
    },
    {
        "How many players play defense on a baseball diamond?": [
            "9",
            "11",
            "10",
            "12"
        ]
    },
    {
        "The DH, or Designated Hitter, hits instead of the": [
            "Pitcher",
            "Catcher",
            "Left Fielder",
            "Right Fielder"
        ]
    },
    {
        "How many players are typically in a pitching rotation?: ": [
            "5",
            "6",
            "7",
            "8"
        ]
    },
    {
        "A southpaw is a: ": [
            "left handed pitcher",
            "right handed first baseman",
            "swtich hitting batter",
            "left handed second baseman"
        ]
    },
    {
        "Which of the following does not affect your batting average?": [
            "sacrafice fly",
            "fielder's choice",
            "walk-off home run",
            "none of the above"
        ]
    },
    {
        "Which is a full-count?": [
            "3-2",
            "2-2",
            "4-5",
            "1-2"
        ]
    },
    {
        "Which is an even-count?": [
            "2-2",
            "3-2",
            "4-5",
            "1-2"
        ]
    },
    {
        "How many innings are in a typical game?": [
            "9",
            "10",
            "8",
            "7"
        ]
    },
    {
        "How many teams are in the MLB?": [
            "30",
            "25",
            "21",
            "20"
        ]
    },
    {
        "How many runs does a grand slam drive in?": [
            "4",
            "7",
            "6",
            "5"
        ]
    },
    {
        " Who defeated tennis player Bobby Riggs in the famous Battle of the Sexes?": [
            "Billie Jean King",
            "Margaret Court",
            "Chris Evert-Lloyd",
            "Martina Navratilova"
        ]
    },
     {
        "Who did John McEnroe defeat in the final to win his first Wimbledon singles title?": [
            "Bjorn Borg",
            "Jimmy Connors",
            "Chris Lewis",
            "Kevin Curren"
        ]
    },
     {
        "What year was tennis originally introduced as an Olympic sport?": [
            "1896",
            "1924",
            "1988",
            "1968"
        ]
    },
     {
        "What is the name for the left side of the tennis court for each player?": [
            "Ad court",
            "Deuce court",
            "Base court",
            "Od court"
        ]
    },
     {
        "What is the name for the right side of the tennis court for each player?": [
            "Deuce court",
            "Ad court",
            "Base court",
            "Od court"
        ]
    },
     {
        "For a tennis player, winning the Grand Slam involves winning what four tournaments in the same calendar year?": [
            "Australian Open, French Open, U.S. Open, and Wimbledon",
            "Italian Open, French Open, U.S.Open, and Wimbledon",
            "French Open, U.S. Open, Davis Cup, Wimbledon",
            "German Open, French Open, U.S. Open, Korean Open"
        ]
    },
     {
        "Who was the first unseeded player to win Wimbledon?": [
            "Boris Becker",
            "Richard Krajicek",
            "Bjorn Borg",
            "Michael Chang"
        ]
    },
     {
        "How long was the longest singles match in recorded tennis history?": [
            "11 hours 5 minutes",
            "6 hours 33 minutes",
            "7 hours 11 minutes",
            "8 hours 48 minutes"
        ]
    },
     {
        "What famous tennis player died of AIDS on February 6, 1993?": [
            "Arthur Ashe",
            "Rod Laver",
            "Bjorn Borg",
            "Stefan Edberg"
        ]
    },
     {
        "What is the term for a zero score in tennis?": [
            "Love",
            "Ace",
            "Let",
            "Deuce"
        ]
    },
     {
        "What year was the first Wimbledon Championship held?": [
            "1877",
            "1914",
            "1792",
            "1813"
        ]
    },
     {
        "Who was the first black player to win a Wimbledon singles title?": [
            "Althea Gibson",
            "Serena Williams",
            "Venus Williams",
            "Arthur Ashe"
        ]
    },
     {
        "What are the traditional Wimbledon colors?": [
            "Green and purple",
            "Green and white",
            "Red and white",
            "Red and yellow"
        ]
    },
     {
        " Who was the first male player to wear a pair of shorts at Wimbledon?": [
            "Bunny Austin",
            "Ellsworth Vines",
            "Jiro Satoh",
            "Don Budge"
        ]
    },
     {
        "What company has provided every tennis ball for the Wimbledon Championship since 1902?": [
            "Slazenger",
            "Wilson",
            "Penn",
            "Prince"
        ]
    },
     {
        "What surface is Wimbledon played on?": [
            "grass",
            "clay",
            "cement",
            "astroturf"
        ]
    },
    {
        "Who was the youngest woman ever to win a singles title at Wimbledon?": [
            "Charlotte Dod",
            "May Sutton",
            "Elizabeth Ryan",
            "Steffi Graf"
        ]
    },
    {
        "What is the nickname for the Ladies' Singles Trophy at Wimbledon?": [
            "Rosewater Dish",
            "Rosepetal Cup",
            "Gussie Dish",
            "Venus Cup"
        ]
    },
    {
        "What is the nickname of the Number 2 Court at Wimbledon?": [
            "Graveyard of Champions",
            "Winner's Court",
            "Court of the Irish",
            "No Man's Land"
        ]
    },


];

exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);


//     if (event.session.application.applicationId !== "amzn1.ask.skill.c8b1c183-1924-4957-83c5-fd1a8ab57ee2") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};


function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

}


function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}


function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}


function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

}



var ANSWER_COUNT = 4;
var GAME_LENGTH = 10;
var CARD_TITLE = "Sports Trivia";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)),
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct.";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong."
            }
            speechOutput += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {

    session.attributes.userPromptedToContinue = true;

    //------ help dialogue------

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
