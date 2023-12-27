FROM alpine:3.19

COPY --chmod=0755 decode64.sh /tmp/

ENTRYPOINT [ "sh", "/tmp/decode64.sh" ]