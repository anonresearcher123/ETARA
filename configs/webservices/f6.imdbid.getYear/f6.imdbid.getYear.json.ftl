{
    "movie": {
        "year": <#if subject.findValue("release_date")??>"${subject.findValue("release_date")?split("-")?first}"<#else>""</#if>
    }
}
