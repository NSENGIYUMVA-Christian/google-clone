const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;
  window.location.href = `https://www.google.com/search?q=${input}&rlz=1C1CHZN_enRW1028RW1029&sxsrf=APwXEdfkN7MjzikK_Eowib8SiiSEhaBLPg%3A1687450862932&ei=7nSUZJXAOMeGxc8P3uSr2AQ&ved=0ahUKEwiV74qqpNf_AhVHQ_EDHV7yCksQ4dUDCBA&uact=5&oq=${input}&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECAAQHjIICAAQHhAPEAoyBAgAEB4yCAgAEAUQHhAKOgoIABBHENYEELADOgoIABCKBRCwAxBDOgoILhCKBRCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhCKBRDIAxCwAxBDGAI6BQgAEIAEOgcIABCABBAKOgsILhCABBDHARCvAToHCC4QgAQQCjoKCC4Q1AIQgAQQCjoVCC4QgAQQChCXBRDcBBDeBBDfBBgDSgQIQRgAULgFWOwQYOsUaAFwAXgAgAHjAogBsw2SAQMzLTWYAQCgAQHAAQHIARPaAQYIARABGAnaAQYIAhABGAjaAQYIAxABGBQ&sclient=gws-wiz-serp`;
}
