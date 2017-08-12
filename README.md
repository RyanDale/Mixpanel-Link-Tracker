# Mixpanel-Link-Tracker
Attribute that can be placed on HTML elements to make Mixpanel event tracking easier. When clicked, it will track the event name and properties defined on the element.

# Example
```
<a href="/more-info/" mixpanel-event="More Info Clicked" mixpanel-properties="{userId: 5, userOrganization: 1}">
  More Info
</a>
```

# Attributes
**mixpanel-event**: The name for the Mixpanel event that will be tracked.

**mixpanel-properties**: Additional data that will be passed up with the event.
