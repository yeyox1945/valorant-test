
export const toHHMMSS = (secs: number) => {
    var hours = Math.floor(secs / 3600)
    var minutes = Math.floor(secs / 60) % 60
    var seconds = secs % 60

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}

export const toHumanlyReadableTime = (dateTime: string) => {

    const originalDateArray = dateTime.split('T');

    const date = originalDateArray[0];
    const time = originalDateArray[1].split('.')[0];

    return `${date} at ${time}`;
}