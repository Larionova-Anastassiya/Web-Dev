def alarm_clock(day, vacation):
  week_preset = "7:00" if not vacation else "10:00"
  weekend_preset = "10:00" if not vacation else "off"
  return week_preset if day not in [6,0] else weekend_preset