const generateMeetingId = (length: number) : string => {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export const createEventInCalendar = (summary: string,  userAccessToken: string): Promise<Response> => {
    const currentDate = new Date();
    const meetingId = generateMeetingId(3)+"-"+generateMeetingId(4)+"-"+generateMeetingId(3);

    return  fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1",{
        method: "post",
        headers: new Headers({
          'Authorization': 'Bearer '+ userAccessToken,
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          summary: summary !== "" ? summary : "New Event",
          start: {
            dateTime: currentDate.getFullYear()+"-"+(currentDate.getMonth() + 1)+"-"+(currentDate.getDate())+"T"+currentDate.getHours()+":"+currentDate.getMinutes()+":00",
            timeZone: "Asia/Kolkata"
          },
          end: {
            dateTime: currentDate.getFullYear()+"-"+(currentDate.getMonth() + 1)+"-"+(currentDate.getDate() + 1)+"T23:45:00",
            timeZone: "Asia/Kolkata"
          },
          conferenceDataVersion:1,
          conferenceData: {
            createRequest: {
              requestId: meetingId,
              conferenceSolutionKey: {
                  type: "hangoutsMeet"
              },
              status:{
                statusCode: "success"
              }
          }
          
        }
        })
    });

}